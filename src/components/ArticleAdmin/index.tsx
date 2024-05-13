'use client';
import React, { FC } from 'react';
import { CustomInputProps } from '@premieroctet/next-admin';
import dynamic from 'next/dynamic';

const Output = dynamic(async () => (await import('editorjs-react-renderer')).default, { ssr: false });

type Props = CustomInputProps;

const ArticleAdmin: FC<Props> = (props) => {
  const dataJSON = JSON.parse(JSON.parse(props.value));
  return (
    <section>
      <Output data={dataJSON} />
    </section>
  );
};
export default ArticleAdmin;
