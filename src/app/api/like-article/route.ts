import prisma from '@/services/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { userId, articleId } = body;

    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
      select: {
        id: true,
        likes: true,
      },
    });

    const updatedArticle = await prisma.article.update({
      where: {
        id: article.id,
      },
      data: {
        likes: article.likes.includes(userId)
          ? article.likes.filter((id) => id !== userId)
          : [userId, ...article.likes],
      },
    });

    return NextResponse.json(updatedArticle);
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
