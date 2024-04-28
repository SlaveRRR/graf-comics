import Article from '@/components/Article';
import { NextPage } from 'next';

const ModerateArticlePage: NextPage = async ({ params }: { params: { id: string } }) => {
  return <Article />;
};
export default ModerateArticlePage;
