import prisma from '@/services/prisma';
import bcrypt from 'bcrypt';
import { NextResponse, type NextRequest } from 'next/server';
export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: { accounts: false, sessions: false, Article: true, comics: true, comments: true },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      },
    );
  }
};

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const body = await request.json();
    const { password, ...updateData } = body;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 15);
      updateData.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: params.id },
      data: updateData,
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Ошибка обновления пользователя' }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Пользователь успешно удалён' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Ошибка удаления пользователя' }, { status: 500 });
  }
};
