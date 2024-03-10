import { NextPage } from 'next';
import Comics from '@/components/Comics';

const ComicsPage : NextPage = () => {
  return <Comics imgs={['/page-1.png','/page-2.png']} />;
  
};
export default ComicsPage
