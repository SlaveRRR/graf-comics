import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';

export const GET = async (request: NextRequest) => {
  try {
    const articles = await prisma.article.findMany({
      where: { isApproved: true },
    });

    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
};
