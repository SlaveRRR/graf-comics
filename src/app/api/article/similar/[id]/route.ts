import prisma from '@/services/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    if (!params?.id) {
      return NextResponse.json({ message: 'Id not found' }, { status: 400 });
    }

    // Получаем общее количество статей (исключая текущую)
    const totalArticles = await prisma.article.count({
      where: {
        NOT: { id: params.id },
        isApproved: true,
      },
    });

    // Если нет других статей, возвращаем пустой массив
    if (totalArticles === 0) {
      return NextResponse.json([]);
    }

    // Ограничиваем количество случайных статей (например, 3)
    const randomLimit = 5;

    // Если статей меньше или равно лимиту, возвращаем все
    if (totalArticles <= randomLimit) {
      const articles = await prisma.article.findMany({
        where: {
          NOT: { id: params.id },
          isApproved: true,
        },
      });
      return NextResponse.json(articles);
    }

    // Генерируем случайные пропуски для пагинации
    const randomSkip = Math.floor(Math.random() * (totalArticles - randomLimit));

    const randomArticles = await prisma.article.findMany({
      where: {
        NOT: { id: params.id },
        isApproved: true,
      },
      skip: randomSkip,
      take: randomLimit,
    });

    return NextResponse.json(randomArticles);
  } catch (error) {
    console.error('Error fetching random articles:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
