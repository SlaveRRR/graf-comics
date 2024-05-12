'use client';
import React, { FC, useEffect, useState, useCallback } from 'react';
import { AddArticle, TextEditor } from '@/components/shared';
import { useActions, useAppSelector } from '@/hooks/redux';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useGetUserByIdQuery } from '@/store/api';

const NewArticleText: FC = () => {
  const article = useAppSelector((state) => state.article);
  const { status, data } = useSession();

  const { isArticleApprove } = useGetUserByIdQuery(data?.user?.id, {
    selectFromResult: ({ data }) => ({ isArticleApprove: data?.isArticleApprove }),
    skip: status !== 'authenticated',
  });
  if (!isArticleApprove) {
    return redirect('/add-article/articles');
  }
  const sendModerate = useCallback(async (result) => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_AXIOS_URL}/api/article`, {
      method: 'POST',
      body: JSON.stringify({ ...article, article: result }),
    });
  }, []);
  return (
    <AddArticle>
      <TextEditor onSave={sendModerate} rawHtml={article.htmlFromFile} />
    </AddArticle>
  );
};
export default NewArticleText;
