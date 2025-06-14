'use client';
import { useGetUserByIdQuery } from '@/store/api';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
import styles from './index.module.scss';

const Avatar: FC = () => {
  const { status, data } = useSession();

  const { avatar } = useGetUserByIdQuery(data?.user?.id, {
    selectFromResult: ({ data }) => ({ avatar: data?.avatar }),
    skip: status !== 'authenticated',
  });

  return (
    <>
      {status === 'loading' ? (
        <div className={styles['loader']}>
          <span className={styles['loader__round']}></span>
        </div>
      ) : (
        <img
          alt="аватарка пользователя"
          className={styles['avatar']}
          src={avatar ? (avatar.includes('https') ? avatar : `data:image/jpeg;base64,${avatar}`) : '/avatar.svg'}
        />
      )}
    </>
  );
};
export default Avatar;
