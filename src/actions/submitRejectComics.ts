'use server';
import { mailer } from '@/services';
import prisma from '@/services/prisma';

export const submitRejectComics = async (ids: number[] | string[]) => {
  for (let id of ids) {
    const comics = await prisma.comics.update({
      data: {
        isApproved: false,
        author: {
          update: {
            isComicsApprove: false,
          },
        },
      },
      where: {
        id: id as string,
      },
      select: {
        author: true,
      },
    });

    await mailer({
      to: comics.author.email,
      subject: 'Модерация комикса почты',
      html: `<div>
      <p>Здравствуйте!</p>

<p>К сожалению, ваш комикс не прошел модерацию </p>

<p>Спасибо!</p>

<p>С уважением,</p>

<p>Команда GrafComics</p>
</div>`,
    });
  }
};
