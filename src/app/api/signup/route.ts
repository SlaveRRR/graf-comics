import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';

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
      return NextResponse.json({ error: 'Email taken' });
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
      }
    );
  }
};
