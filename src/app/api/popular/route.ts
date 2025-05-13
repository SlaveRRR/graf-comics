import prisma from '@/services/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    const popular = await prisma.comics.findMany({
      where: { isApproved: true },
      take: 10,
      select: {
        id: true,
        covers: true,
        title: true,
        likes: true,
      },
    });

    return NextResponse.json(popular);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    );
  }
};
