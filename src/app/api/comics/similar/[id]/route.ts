import prisma from '@/services/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    if (!params?.id) {
      return NextResponse.json({ message: 'Id not found' }, { status: 400 });
    }

    // Получаем общее количество комиксов (исключая текущий)
    const totalComicses = await prisma.comics.count({
      where: {
        NOT: { id: params.id },
        isApproved: true,
      },
    });

    // Если нет других статей, возвращаем пустой массив
    if (totalComicses === 0) {
      return NextResponse.json([]);
    }

    // Ограничиваем количество случайных комиксов
    const randomLimit = 2;

    // Если комиксов меньше или равно лимиту, возвращаем все
    if (totalComicses <= randomLimit) {
      const comicses = await prisma.comics.findMany({
        where: {
          NOT: { id: params.id },
          isApproved: true,
        },
        select: {
          id: true,
          covers: true,
          title: true,
          likes: true,
        },
      });
      return NextResponse.json(comicses);
    }

    // Генерируем случайные пропуски для пагинации
    const randomSkip = Math.floor(Math.random() * (totalComicses - randomLimit));

    const randomComicses = await prisma.comics.findMany({
      where: {
        NOT: { id: params.id },
        isApproved: true,
      },
      select: {
        id: true,
        covers: true,
        title: true,
        likes: true,
      },
      skip: randomSkip,
      take: randomLimit,
    });

    return NextResponse.json(randomComicses);
  } catch (error) {
    console.error('Error fetching random articles:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
