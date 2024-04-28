'use client';
import React, { FC } from 'react';
import { CustomInputProps } from '@premieroctet/next-admin';
import dynamic from 'next/dynamic';

const Output = dynamic(async () => (await import('editorjs-react-renderer')).default, { ssr: false });

type Props = CustomInputProps;

const Article: FC<Props> = ({ value, name, onChange, rawErrors }) => {
  console.log(value);
  const data = JSON.parse(JSON.parse(value));
  console.log(data);
  return (
    <section>
      <Output data={data} />
    </section>
  );
};
export default Article;
