import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './index.module.scss';
import { LogoProps } from './types';

const Logo: FC<LogoProps> = ({ isHeader = true, mixClass }) => {
  return isHeader ? (
    <Link className={cn(styles['header-logo'], mixClass)} href={'/'}></Link>
  ) : (
    <Link className={cn(styles['login-logo'], mixClass)} href={'/'}></Link>
  );
};

export default Logo;
