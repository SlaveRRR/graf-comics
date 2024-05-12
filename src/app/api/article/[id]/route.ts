import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    if (!params?.id) {
      return NextResponse.json({ message: 'Id not found' });
    } else {
      const article = await prisma.article.findUnique({
        where: { id: params.id, isApproved: true },
      });
      return NextResponse.json(article);
    }
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
};
