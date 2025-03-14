import cn from 'classnames';
import { FC } from 'react';
import { Card } from '..';
import styles from './index.module.scss';

interface ICard {
  name: string;
  type?: string;
}

type Props = {
  cards: ICard[];
  mixClass: string[];
};

const Cards: FC<Props> = ({ cards, mixClass }) => {
  return (
    <div className={cn(styles['cards'], ...mixClass)}>
      {cards.map((v, i) => (
        <Card key={`${v}${i}`} text={v.name} type={v.type} />
      ))}
    </div>
  );
};

export default Cards;
