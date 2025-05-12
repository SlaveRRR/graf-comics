import cn from 'classnames';
import { FC } from 'react';
import styles from './index.module.scss';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, bg = false, mixClass = [], onClick }) => {
  return (
    <button
      className={cn(
        styles['button'],
        {
          [styles['button__transparent']]: bg,
        },
        ...mixClass,
      )}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
};

export default Button;
