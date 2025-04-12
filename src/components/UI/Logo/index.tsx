import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './index.module.scss';
import { LogoProps } from './types';

const Logo: FC<LogoProps> = ({ mixClass }) => {
  return (
    <Link className={cn(mixClass)} href={'/'}>
      <picture className={cn(styles['logo'])}>
        <source type="image/webp" srcSet="/logo.webp 1x, /logo2x.webp 2x, /logo3x.webp 3x" />
        <img
          srcSet="
                     /logo.png 1x,
                     /logo2x.png 2x,
                     /logo3x.png 3x"
          src="/logo.png"
          alt="logo"
        />
      </picture>
    </Link>
  );
};

export default Logo;
