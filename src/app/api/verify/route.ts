import prisma from '@/services/prisma';
import jwt from 'jsonwebtoken';
import { NextResponse, type NextRequest } from 'next/server';
export const GET = async (request: NextRequest) => {
  try {
    const token = request.nextUrl.searchParams.get('token');
    if (!token) {
      return NextResponse.json(
        { message: 'Ссылка невалидная, попробуйте создать новую ссылку' },
        {
          status: 400,
        },
      );
    }
    const verify = jwt.verify(token, process.env.NEXTAUTH_SECRET);
    if (typeof verify === 'string') {
      return NextResponse.json(
        { message: 'Ссылка невалидная, попробуйте создать новую ссылку' },
        {
          status: 500,
        },
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: verify.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'Такая почта уже занята!' },
        {
          status: 409,
          statusText: 'Такая почта уже занята!',
        },
      );
    }
    await prisma.user.create({
      data: {
        emailVerified: true,
        email: verify.email,
      },
    });
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth/signup?activate=true`);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Действие ссылки истекло!' },
      {
        status: 500,
      },
    );
  }
};
