import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { connect } from '@/services/connect';

export const POST = async (request: NextRequest) => {
  try {
    await connect();
    console.log('ok');
    const body = await request.json();
    console.log(body);
    const password = await bcrypt.hash(body['password'], 15);
    const newUser = await prisma.user.create({
      data: {
        ...body,
        password,
      },
    });
    console.log(newUser);
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
