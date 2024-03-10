import React, { FC,memo } from 'react';
import styles from './index.module.scss';

type Props = {
    value:number;
    maxValue:number;
}

const Progress : FC<Props> = ({value,maxValue}) => {
  return (
    <div className={styles["progress"]}>
      <div className={styles["progress__value"]} style={{
        width:`${(value / maxValue) * 100 }%`
      }} ></div>
    </div>
  );
};
export default memo(Progress);
