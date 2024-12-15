import Comics from '@/components/Comics';
import { NextPage } from 'next';

const ComicsPage: NextPage = () => {
  return <Comics imgs={['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png', '/8.png']} />;
};
export default ComicsPage;
