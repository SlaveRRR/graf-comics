import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: { accounts: false, sessions: false, Article: true, comics: true, comments: true },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
};
