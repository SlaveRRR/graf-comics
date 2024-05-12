'use client';
import { useGetUserByIdQuery } from '@/store/api';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';

type Props = {};

const ArticleUsers: FC<Props> = ({}) => {
  const { status, data } = useSession();

  const user = useGetUserByIdQuery(data?.user?.id, {
    skip: status !== 'authenticated',
  });
  console.log(user);
  return (
    <div className="container">
      <p>Ваши статьи:</p>
    </div>
  );
};
export default ArticleUsers;
