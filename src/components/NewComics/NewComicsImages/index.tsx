'use client';
import { AddComics } from '@/components/shared';
import { useActions, useAppSelector } from '@/hooks/redux';
import { IComics } from '@/store/comics/types';
import { readFiles, readImageFile } from '@/utils/filereader';
import { File } from 'buffer';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';

type FormData = {
  covers: FileList | string[];
  banner: File | string;
} & Pick<IComics, 'title' | 'description'>;

const defaultImages = ['/bg-default.svg', '/bg-default.svg', '/bg-default.svg'];

const NewComicsImages: FC = () => {
  const { addTitleDescription, addCover, addBanner } = useActions();
  const comics = useAppSelector((state) => state.comics);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
    getValues,
  } = useForm<FormData>({
    mode: 'onChange',
    shouldFocusError: true,
    defaultValues: comics,
  });

  const router = useRouter();

  const handler: SubmitHandler<FormData> = (data) => {
    addTitleDescription({
      title: data.title,
      description: data.description,
      author: session?.user?.name,
    });
  };

  return (
    <AddComics final={false}>
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
              {...register('title', {
                required: 'Это поле обязательное!',
              })}
            />
            {Boolean(errors?.title) && <p className={styles['error']}>{errors?.title?.message}</p>}
          </label>

          <label className={styles['description']} htmlFor="description">
            Описание
            <Controller
              name="description"
              render={({ field: { onChange, value } }) => (
                <textarea
                  value={value}
                  className={styles['description__input']}
                  placeholder="Придумайте описание"
                  onChange={onChange}
                  id="description"
                />
              )}
              control={control}
              rules={{
                required: 'Это поле обязательное!',
              }}
            />
            {Boolean(errors?.description) && <p className={styles['error']}>{errors?.description?.message}</p>}
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
              {...register('covers', {
                required: true,
                onChange(event) {
                  if (getValues('covers').length <= 4) {
                    readFiles(getValues('covers') as FileList).then((data) => addCover(data));
                  }
                },
              })}
              accept="image/png, image/jpeg"
              multiple
            />
            <span className={styles['cover-img']}>
              <Image
                width={83}
                height={100}
                className={styles['cover-img__item']}
                src={comics.covers[0] || '/bg-default.svg'}
                alt="bg of comics"
              />
            </span>
            {comics.covers.length >= 2
              ? comics.covers
                  .slice(1)
                  .map((el) => (
                    <Image className={styles['cover-img__item']} width={83} height={100} src={el} alt="bg of comics" />
                  ))
              : defaultImages.map((el) => (
                  <Image className={styles['cover-img__item']} width={83} height={100} src={el} alt="bg of comics" />
                ))}
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
            {comics.banner && <img className={styles['banner-img']} src={comics.banner} alt="banner for comics" />}
          </label>
          <input
            type="file"
            id="banner"
            className={cn(styles['cover__input'], 'myvisuallyhidden')}
            {...register('banner', {
              required: true,
              onChange(event) {
                readImageFile(getValues('banner')[0]).then((data) => addBanner(data));
              },
            })}
            accept="image/png, image/jpeg"
          />
        </fieldset>
        <button
          disabled={isValid ? false : !isValid && comics.banner && comics.covers.length >= 1 ? false : true}
          onClick={() => router.push('/add-comics/tags')}
          className={styles['next-btn']}
        >
          Далее
        </button>
      </form>
    </AddComics>
  );
};

export default NewComicsImages;
