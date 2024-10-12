'use client';
import { AddArticle, TextEditor } from '@/components/shared';
import { useAppSelector } from '@/hooks/redux';
import { useGetUserByIdQuery } from '@/store/api';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FC, useCallback } from 'react';

const NewArticleText: FC = () => {
  const article = useAppSelector((state) => state.article);
  const { status, data } = useSession();

  const { isArticleApprove } = useGetUserByIdQuery(data?.user?.id, {
    selectFromResult: ({ data }) => ({ isArticleApprove: data?.isArticleApprove }),
    skip: status !== 'authenticated',
  });

  const sendModerate = useCallback(async (result) => {
    await fetch(`${process.env.NEXT_PUBLIC_AXIOS_URL}/api/article`, {
      method: 'POST',
      body: JSON.stringify({ ...article, article: result }),
    });
  }, []);
  if (!isArticleApprove) {
    return redirect('/add-article/articles');
  }
  return (
    <AddArticle>
      <TextEditor onSave={sendModerate} rawHtml={article.htmlFromFile} />
    </AddArticle>
  );
};
export default NewArticleText;
