import Comics from '@/components/Comics';
import prisma from '@/services/prisma';
import { NextPage } from 'next';

const getComics = async (id: string) => {
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
  const imgs = data.toms.flatMap((el) => el.chapters.flatMap((item) => item.images));
  return <Comics title={data.toms[0].chapters[0].name} imgs={imgs} />;
};
export default ComicsPage;
