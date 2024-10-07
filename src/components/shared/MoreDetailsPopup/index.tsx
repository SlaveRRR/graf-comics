'use client';
import React, { FC } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

type Props = {
  mixClass: string[];
  isOpen: boolean;
  onClose: () => void;
}

const MoreDetailsPoopup: FC<Props> = ({isOpen, onClose, mixClass }) => {
  return (
    <div>
      {isOpen && <div className={cn(styles['more-details__overlay'])} onClick={onClose}></div>}

      <div className={cn(styles['more-details'], { [styles.open]: isOpen }, ...mixClass)}>
        <button className={styles['more-details__close-popup-btn']} onClick={onClose}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.62891 4.2666L12.2698 12.8026" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" />
            <path d="M4.49219 12.6553L12.4053 4.41285" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>

        <div>
          <p className={styles['more-details__main-title']}>Подробнее</p>
          <p className={styles['more-details__subtitle']}>Основная информация</p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}>Никнейм: </span>
            Имя пользователя
          </p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}>Статус: </span>
            Информация о пользователе
          </p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}> 0 подписчиков</span>
          </p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}> 0 подписок</span>
          </p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}> 0 комментариев</span>
          </p>

          <p className={styles['more-details__subtitle']}>Личная информация</p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}>Пол: </span>
            жн/мж
          </p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}>Дата рождения: </span>
            дд.мм.гггг
          </p>
          <p className={styles['more-details__text']}>
            <span className={styles['more-details__text--bold']}>Город: </span>
            Название города
          </p>

          <p className={styles['more-details__subtitle']}>Ссылки</p>
          <a href="#" className={styles['more-details__link']}>Ссылка</a>
          <a href="#" className={styles['more-details__link']}>Ссылка</a>
          <a href="#" className={styles['more-details__link']}>Ссылка</a>
        </div>
      </div>
    </div>
  );
};

export default MoreDetailsPoopup;
