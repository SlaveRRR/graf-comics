// components/UI/Cards/index.tsx
import cn from 'classnames';
import { FC } from 'react';
import { Card } from '..';
import styles from './index.module.scss';

interface ICard {
  id: string;
  name: string;
  type?: string;
  cover?: string;
}

type Props = {
  cards: ICard[];
  mixClass: string[];
};

const Cards: FC<Props> = ({ cards, mixClass }) => {
  return (
    <div className={cn(styles['cards'], ...mixClass)}>
      {cards.map((card) => (
        <Card
          key={card.id}
          text={card.name}
          type={card.type}
          cover={card.cover} // ← Теперь передаем cover
        />
      ))}
    </div>
  );
};

export default Cards;
