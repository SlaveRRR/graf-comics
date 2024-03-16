import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { connect } from '@/services/connect';

export const GET = async (request: NextRequest) => {
  try {
    const res = await getServerSession(options);
    if (!res) {
      return NextResponse.json(
        { message: 'unathorized' },
        {
          status: 401,
        }
      );
    }
    const {
      user: { id },
    } = res;
    const { avatar } = await prisma.user.findUnique({ where: { id: id }, select: { avatar: true } });
    return NextResponse.json({ response: avatar });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
};
