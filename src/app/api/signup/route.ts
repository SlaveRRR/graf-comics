import { passwordRegexp } from '@/constants';
import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { password, email, name } = body;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        { message: 'Ошибка регистрации, активируйте почту заново!' },
        {
          status: 409,
          statusText: 'Ошибка регистрации, активируйте почту заново!',
        },
      );
    }
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
    const user = await prisma.user.update({
      where: {
        email,
      },
      select: {
        name: true,
        email: true,
      },
      data: {
        name: name,
        password: hashedPassword,
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
