'use client';
import React, { FC } from 'react';

import { Button } from '@/components/UI';
import { MixClass } from '@/types/mixClass.type';
import cn from 'classnames';
import styles from './index.module.scss';

type Props = {
  sloganText: string;
  descriptionText: React.ReactNode;
  buttonText: string;
} & MixClass;

const GridGallery: FC<Props> = ({ mixClass, sloganText, buttonText, descriptionText }) => {
  return (
    <div className={cn(styles['grid-gallery__container'], ...mixClass)}>
      <section className={styles['image-section']}>
        <div className={styles['cards']}>
          <div className={cn(styles['cards__item--start'], styles['cards__item'])} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
        </div>
        <div className={styles['image-container']}>
          <div className={styles['image-container__text-container']}>
            <h1 className={styles['image-container__slogan']}>{sloganText}</h1>
            <p className={styles['image-container__text']}>{descriptionText}</p>
            <Button mixClass={[styles['image-container__btn']]}>{buttonText}</Button>
          </div>
        </div>
        <div className={styles['cards-pc']}>
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-pc__item']} />
          <div className={styles['cards-subgrid']}>
            <div className={styles['cards-subgrid__item']} />
            <div className={styles['cards-subgrid__item']} />
          </div>
          <div className={styles['cards-subgrid-bottom']}>
            <div className={styles['cards-subgrid-bottom__item']} />
            <div className={styles['cards-subgrid-bottom__item']} />
          </div>
        </div>
        <div className={styles['cards']}>
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
          <div className={styles['cards__item']} />
        </div>
      </section>
    </div>
  );
};

export default React.memo(GridGallery);
