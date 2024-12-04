import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Схема валидации пароля
const passwordSchema = z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
  message: 'Пароль должен содержать 8 символов или более, включая 1 цифру.',
});

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { password, email, name } = body;

    // Проверяем, что пароль соответствует схеме
    try {
      passwordSchema.parse(password);
    } catch (err) {
      return NextResponse.json(
        { message: err.errors[0]?.message || 'Некорректный пароль!' },
        {
          status: 400,
          statusText: 'Некорректный пароль!',
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

    const hashedPassword = await bcrypt.hash(password, 15); // Хэшируем пароль
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
