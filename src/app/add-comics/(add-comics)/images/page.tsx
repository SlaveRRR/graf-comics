import { RouterLoader } from '@/components/UI';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const NewComicsImages = dynamic(() => import('@/components/NewComics/NewComicsImages'), {
  loading: () => <RouterLoader />,
  ssr: false,
});

const AddComicsImages: NextPage = () => {
  return <NewComicsImages />;
};
export default AddComicsImages;
