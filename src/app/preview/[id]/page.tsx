import ComicsPreview from '@/components/ComicsPreview';
import prisma from '@/services/prisma';
import { Comics } from '@prisma/client';
import { NextPage } from 'next';

const getComics = async (id: string): Promise<Comics> => {
  return prisma.comics.findUnique({
    where: { id: id, isApproved: true },
    include: {
      toms: {
        include: {
          chapters: true,
        },
      },
    },
  });
};

const ComicsPage: NextPage = async ({ params }: { params: { id: string } }) => {
  const data = await getComics(params?.id);
  // @ts-ignore
  return <ComicsPreview comics={data} />;
};
export default ComicsPage;
