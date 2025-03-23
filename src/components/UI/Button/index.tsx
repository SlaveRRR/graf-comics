import cn from 'classnames';
import React, { FC } from 'react';
import styles from './index.module.scss';
type Props = {
  children: React.ReactNode;
  bg?: boolean;
  mixClass?: string[];
};

const Button: FC<Props> = ({ children, bg = false, mixClass = [] }) => {
  return (
    <button
      className={cn(
        styles['button'],
        {
          [styles['button__transparent']]: bg,
        },
        ...mixClass,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
