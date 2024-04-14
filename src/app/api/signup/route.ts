import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { connect } from '@/services/connect';

export const POST = async (request: NextRequest) => {
  try {
    await connect();
    console.log('ok');
    const body = await request.json();
    const { email, name, password } = await request.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email taken' });
    }
    console.log(body, 'this is boydy asdfasf');
    const hashedPassword = await bcrypt.hash(password, 15);
    // const newUser = await prisma.user.create({
    //   data: {
    //     ...body,
    //     hashedPassword,
    //   },
    // });
    // console.log(newUser);
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
