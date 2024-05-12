'use server';
import { ModelName } from '@premieroctet/next-admin';
import prisma from '@/services/prisma';
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
