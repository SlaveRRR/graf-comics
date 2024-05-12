'use client';
import React, { FC } from 'react';
import { CustomInputProps } from '@premieroctet/next-admin';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { useGetArticleByIdQuery } from '@/store/api/articles';

const Output = dynamic(async () => (await import('editorjs-react-renderer')).default, { ssr: false });

type Props = CustomInputProps;

const Article: FC<Props> = (props) => {
  const obj = useParams<{ id: string }>();
  const { data, isLoading } = useGetArticleByIdQuery(obj?.id, {
    skip: Boolean(props?.value),
  });
  if (!props?.value) {
    if (!obj?.id) {
      return <p>Неизвестный id</p>;
    }
    console.log(data);
    // @ts-ignore
    return <section>{isLoading ? <p>Загрузка...</p> : <Output data={JSON.parse(data.content)} />}</section>;
  }
  const dataJSON = JSON.parse(JSON.parse(props.value));
  return (
    <section>
      <Output data={dataJSON} />
    </section>
  );
};
export default Article;
