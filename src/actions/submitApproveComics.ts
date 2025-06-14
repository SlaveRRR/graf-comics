'use server';
import { mailer } from '@/services';
import prisma from '@/services/prisma';
export const submitApproveComics = async (ids: number[] | string[]) => {
  for (let id of ids) {
    const comics = await prisma.comics.update({
      data: {
        isApproved: true,
        author: {
          update: {
            isComicsApprove: true,
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

<p>Поздравляем ваш комикс успешно прошел модерацию.Теперь он доступен на нашем сайте</p>

<a href="${process.env.NEXTAUTH_URL}/comics/${id}">Ссылка на комикс</a>

<p>Спасибо!</p>

<p>С уважением,</p>

<p>Команда GrafComics</p>
</div>`,
    });
  }
};
