'use client';
import React, { FC } from 'react';
import { AddComics } from '@/components/shared';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';
import { Button } from '@/components/UI';

interface IFormData {
  title: string;
  description: string;
  cover: File[];
  banner: File[];
}

const NewComicsImages: FC = () => {
  const { register, handleSubmit, control } = useForm<IFormData>();

  const handler: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <AddComics>
      <form onSubmit={handleSubmit(handler)}>
        <fieldset>
          <legend className="visuallyhidden">Название и описание</legend>
          <label className={styles['title']} htmlFor="Title">
            Название
            <input
              className={styles['title__input']}
              placeholder="Введите название"
              id="title"
              type="text"
              {...register('title')}
            />
          </label>
          <label className={styles['description']} htmlFor="description">
            Описание
            <Controller
              name="description"
              render={({ field: { onChange } }) => (
                <textarea
                  className={styles['description__input']}
                  placeholder="Придумайте описание"
                  onChange={onChange}
                  id="description"
                />
              )}
              control={control}
            />
          </label>
        </fieldset>
        <fieldset>
          <p className={styles['text-label']}>Обложка и дополнительные страницы</p>
          <div className={styles['imgs']}>
            <label className={styles['cover']} htmlFor="cover">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1324_9631)">
                  <path d="M1 13H25" stroke="#7A5AF8" stroke-width="1.8" stroke-linecap="round" />
                  <path d="M13 25L13 0.999999" stroke="#7A5AF8" stroke-width="1.8" stroke-linecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1324_9631">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </label>
            <input
              type="file"
              id="cover"
              className={cn(styles['cover__input'], 'myvisuallyhidden')}
              {...register('cover')}
              accept="image/png, image/jpeg"
              multiple
            />
            <span className={styles['cover-img']}>
              <Image
                width={83}
                height={100}
                className={styles['cover-img__item']}
                src="/bg-default.svg"
                alt="bg of comics"
              />
            </span>
            <Image
              className={styles['cover-img__item']}
              width={83}
              height={100}
              src="/bg-default.svg"
              alt="bg of comics"
            />
            <Image
              className={styles['cover-img__item']}
              width={83}
              height={100}
              src="/bg-default.svg"
              alt="bg of comics"
            />
            <Image
              className={styles['cover-img__item']}
              width={83}
              height={100}
              src="/bg-default.svg"
              alt="bg of comics"
            />
          </div>
          <p className={styles['text-label']}>Баннер(фон)</p>
          <label className={styles['banner']} htmlFor="banner">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1324_9631)">
                <path d="M1 13H25" stroke="#7A5AF8" stroke-width="1.8" stroke-linecap="round" />
                <path d="M13 25L13 0.999999" stroke="#7A5AF8" stroke-width="1.8" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_1324_9631">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <input
            type="file"
            id="cover"
            className={cn(styles['cover__input'], 'myvisuallyhidden')}
            {...register('banner')}
            accept="image/png, image/jpeg"
          />
        </fieldset>
        <button className={styles['next-btn']}>Далее</button>
      </form>
    </AddComics>
  );
};

export default NewComicsImages;
