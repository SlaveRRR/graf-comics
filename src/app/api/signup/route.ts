import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

// Регулярное выражение для проверки пароля
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { password, email, name } = body;

    // Валидация пароля
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        { message: 'Пароль должен содержать не менее 8 символов, включая хотя бы одну букву и одну цифру.' },
        {
          status: 400,
          statusText: 'Invalid password',
        },
      );
    }

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
