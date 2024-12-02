import cn from 'classnames';
import { FC } from 'react';
import { Card } from '..';
import styles from './index.module.scss';
type Props = {
  names: string[];
  mixClass: string[];
  isNew?: boolean;
};

const Cards: FC<Props> = ({ names, mixClass, isNew = false }) => {
  return (
    <div className={cn(styles['cards'], ...mixClass)}>
      {names.map((v, i) => (
        <Card key={`${v}${i}`} text={v} isNew={isNew} />
      ))}
    </div>
  );
};

export default Cards;
