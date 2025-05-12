'use server';
import prisma from '@/services/prisma';
export const submitApproveArticle = async (ids: number[] | string[]) => {
  for (let id of ids) {
    await prisma.article.update({
      data: {
        isApproved: true,
        author: {
          update: {
            isArticleApprove: true,
          },
        },
      },
      where: {
        id: id as string,
      },
    });
  }
};
