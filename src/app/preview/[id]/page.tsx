import ErrorPage from '@/app/not-found';
import ComicsPreview from '@/components/ComicsPreview';
import prisma from '@/services/prisma';
import { Comics } from '@prisma/client';
import { NextPage } from 'next';

const getComics = async (id: string): Promise<Comics> => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

const ComicsPage: NextPage = async ({ params }: { params: { id: string } }) => {
  try {
    const data = await getComics(params?.id);
    // @ts-ignore
    return <ComicsPreview comics={data} isBackend={true} />;
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
};
export default ComicsPage;
