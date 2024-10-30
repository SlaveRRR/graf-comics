import { mailer } from '@/services';
import jwt from 'jsonwebtoken';
import { NextResponse, type NextRequest } from 'next/server';
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const token = jwt.sign(body, process.env.NEXTAUTH_SECRET, {
      expiresIn: '1m',
    });
    await mailer({
      to: body.email,
      subject: 'Активация почты',
      html: `<div>
      <p>Здравствуйте!</p>

<p>Спасибо за регистрацию на нашем сайте. Чтобы завершить процесс регистрации, пожалуйста, подтвердите свой адрес электронной почты, перейдя по следующей ссылке:</p>

<a href="${process.env.NEXTAUTH_URL}/api/verify?token=${token}">Активировать почту</a>

<p>Если вы не регистрировались на нашем сайте, просто проигнорируйте это сообщение.</p>

<p>Спасибо!</p>

<p>С уважением,</p>

<p>Команда GrafComics</p>
</div>`,
    });
    return NextResponse.json('link created');
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
