import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';
import { IArticle } from '@/store/article/types';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';
import { Category } from '@prisma/client';

// prettier-ignore
const categoryObj = {
  "продвижение комикса": Category.PROMOTION,
  "сценарий": Category.SCENARIO,
  "лайфстайл художника": Category.LIFESTYLE,
  "персонажи": Category.CHARACTERS,
  "окружение": Category.ENVIROMENT,
  "графическое наполнение": Category.GRAPHIC,
};

export const GET = async (request: NextRequest) => {
  try {
    const articles = await prisma.article.findMany({
      where: { isApproved: true },
    });
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const session = await getServerSession(options);
    const data: IArticle = await request.json();
    console.log(data, 'this is data request');

    const newArticle = await prisma.article.create({
      data: {
        category: categoryObj[data.category[0].text],
        content: data.article,
        isApproved: false,
        cover: data.cover,
        description: data.description,
        title: data.title,
        authorId: session.user.id,
        authorName: data.authorName,
      },
    });
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        isArticleApprove: false,
      },
    });
    return NextResponse.json(newArticle);
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 500,
      }
    );
  }
};
