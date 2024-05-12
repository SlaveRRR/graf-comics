import { NextResponse, type NextRequest } from 'next/server';
import prisma from '@/services/prisma';
import { IArticle } from '@/store/article/types';
import { getServerSession } from 'next-auth';
import { options } from '../../api/auth/[...nextauth]/options';

export const POST = async (request: NextRequest) => {
  try {
    const session = await getServerSession(options);
    const data: IArticle = await request.json();
    console.log(data, 'this is data request');

    const newArticle = await prisma.article.create({
      data: {
        category: data.category,
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
