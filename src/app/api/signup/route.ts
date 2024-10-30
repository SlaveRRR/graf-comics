import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { password, email } = body;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already taken' },
        {
          status: 409,
          statusText: 'Email already taken',
        },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 15);
    await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });
    return NextResponse.json('User created');
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
