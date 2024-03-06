import React, { FC } from 'react';
import cn from  'classnames'
import styles from './index.module.scss';
import Link from 'next/link';

type Props = {
  text: string;
  url: string;
  mixClass?: string[];
};

const Badge: FC<Props> = ({ text, url, mixClass = [] }) => {
  return (
    <Link className={cn(styles['badge'],...mixClass)} href={url}>
      {text}
    </Link>
  );
};

export default Badge;
