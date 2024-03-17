import React, { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  avatar: string;
};

const Avatar: FC<Props> = ({ avatar }) => {
  return <img alt="аватарка пользователя" className={styles['avatar']} src={avatar} />;
};
export default Avatar;
