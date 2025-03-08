import cn from 'classnames';
import { FC } from 'react';
import { Card } from '..';
import styles from './index.module.scss';
type Props = {
  names: string[];
  mixClass: string[];
  types?: string[];
};

const Cards: FC<Props> = ({ names, mixClass, types = [] }) => {
  return (
    <div className={cn(styles['cards'], ...mixClass)}>
      {names.map((v, i) => (
        <Card key={`${v}${i}`} text={v} type={types[i]} />
      ))}
    </div>
  );
};

export default Cards;
