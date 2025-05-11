import { passwordRegexp } from '@/constants';
import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { password, email, name } = body;

    if (!passwordRegexp.test(password)) {
      return NextResponse.json(
        { message: 'Ошибка регистрации, невалидный пароль!' },
        {
          status: 409,
          statusText: 'Пароль должен содержать 8 символов или более, включая 1 цифру.',
        },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 15);
    const user = await prisma.user.create({
      data: {
        emailVerified: true,
        email: email,
        name: name,
        password: hashedPassword,
      },
      select: {
        name: true,
        email: true,
      },
    });

    return NextResponse.json(user);
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
