'use server';
import prisma from '@/services/prisma';
import { ModelName } from '@premieroctet/next-admin';
export const submitApproveArticle = async (model: ModelName, ids: number[] | string[]) => {
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
