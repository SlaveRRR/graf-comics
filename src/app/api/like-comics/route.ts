import prisma from '@/services/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { userId, comicsId } = body;

    const comics = await prisma.comics.findUnique({
      where: {
        id: comicsId,
      },
      select: {
        id: true,
        likes: true,
      },
    });

    const updatedComics = await prisma.comics.update({
      where: {
        id: comics.id,
      },
      data: {
        likes: comics.likes.includes(userId) ? comics.likes.filter((id) => id !== userId) : [userId, ...comics.likes],
      },
    });

    return NextResponse.json(updatedComics);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    );
  }
};
