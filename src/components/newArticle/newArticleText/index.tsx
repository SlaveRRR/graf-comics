'use client';
import React, { FC, useEffect, useState } from 'react';
import { AddArticle, TextEditor } from '@/components/shared';
import { useActions, useAppSelector } from '@/hooks/redux';

const NewArticleText: FC = () => {
  const article = useAppSelector((state) => state.article);
  const [result, setResult] = useState('');
  useEffect(() => {
    const sendModerate = async () => {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_AXIOS_URL}/api/article`, {
        method: 'POST',
        body: JSON.stringify({ ...article, article: result }),
      });
    };
    sendModerate();
  }, [result]);
  return (
    <AddArticle>
      <TextEditor setResult={setResult} rawHtml={article.htmlFromFile} />
    </AddArticle>
  );
};
export default NewArticleText;
