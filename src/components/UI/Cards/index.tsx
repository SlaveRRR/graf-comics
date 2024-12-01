import cn from 'classnames';
import { FC } from 'react';
import { Card } from '..';
import styles from './index.module.scss';
type Props = {
  names: string[];
  mixClass: string[];
  isNews?: boolean[];
};

const Cards: FC<Props> = ({ names, mixClass, isNews = [] }) => {
  return (
    <div className={cn(styles['cards'], ...mixClass)}>
      {names.map((v, i) => (
        <Card key={`${v}${i}`} text={v} isNew={isNews[i]} />
      ))}
    </div>
  );
};

export default Cards;
