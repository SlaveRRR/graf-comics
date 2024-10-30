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
    // await prisma.user.update({
    //   where: {
    //     email: verify['email'],
    //   },
    //   data: {
    //     emailVerified: true,
    //   },
    // });
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth/signin`);
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
