'use server';
import prisma from '@/services/prisma';
import { ModelName } from '@premieroctet/next-admin';
export const submitApproveComics = async (model: ModelName, ids: number[] | string[]) => {
  for (let id of ids) {
    await prisma.comics.update({
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
    });
  }
};
