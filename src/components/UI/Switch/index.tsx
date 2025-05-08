'use client';
import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';
type Props = {
  checked: any;
  unchecked: any;
  mixClass?: string[];
  value: boolean;
  onChange?: () => void;
};

const Switch: FC<Props> = ({ checked, unchecked, mixClass = [], value, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(value);

  return (
    <button
      onClick={() => {
        setIsChecked((prev) => !prev);
        onChange();
      }}
      type="button"
      role="switch"
      className={cn(styles['switch'], ...mixClass, {
        [styles['switch--checked']]: isChecked,
      })}
    >
      <div className={styles['switch-handle']}></div>
      <span className={styles['switch-inner']}>
        <span className={styles['switch-inner-checked']}> {checked}</span>
        <span className={styles['switch-inner-unchecked']}>{unchecked}</span>
      </span>
    </button>
  );
};

export default Switch;
