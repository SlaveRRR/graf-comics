import { RouterLoader } from '@/components/UI';
import dynamic from 'next/dynamic';

const NoveltyPage = dynamic(() => import('@/components/Novelty'), {
  loading: () => <RouterLoader />,
  ssr: false,
});

export default NoveltyPage;
