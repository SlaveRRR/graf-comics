import { RouterLoader } from '@/components/UI';
import dynamic from 'next/dynamic';

const PopularPage = dynamic(() => import('@/components/Popular'), {
  loading: () => <RouterLoader />,
  ssr: false,
});

export default PopularPage;
