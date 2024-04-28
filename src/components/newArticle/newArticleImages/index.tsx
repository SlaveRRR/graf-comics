'use client';
import { AddArticle } from '@/components/shared';
import React, { ChangeEvent, FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { readImageFile } from '@/utils/filereader';
import { useRouter } from 'next/navigation';
import styles from './index.module.scss';
import { useActions, useAppSelector } from '@/hooks/redux';
import { IArticle } from '@/store/article/types';
import cn from 'classnames';

type FormData = {
  cover: File | string;
  htmlFromFile: File | string;
} & Pick<IArticle, 'title' | 'description'>;

const NewArticleImages: FC = () => {
  const { addTitleDescriptionArticle, addCoverArticle, addHtmlFromFile, addFileName, clearFile } = useActions();
  const router = useRouter();
  const article = useAppSelector((state) => state.article);
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
    getValues,
  } = useForm<FormData>({
    mode: 'onChange',
    shouldFocusError: true,
    defaultValues: article,
  });
  const handler: SubmitHandler<FormData> = (data) => {
    addTitleDescriptionArticle({
      title: data.title,
      description: data.description,
    });
  };

  const handleTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files[0];
      const data = new FormData();
      data.append('file', new Blob([await file.arrayBuffer()]));
      const resp = await fetch(`${process.env.NEXT_PUBLIC_AXIOS_URL}/api/extract`, {
        method: 'POST',
        body: data,
      });
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      const htmlFromFile: string = await resp.json();
      addHtmlFromFile(htmlFromFile);
      addFileName(file.name);
    } catch (error) {
      alert(error);
    }
  };
  const removeText = () => {
    clearFile();
  };
  return (
    <AddArticle>
      <form onSubmit={handleSubmit(handler)}>
        <fieldset>
          <legend className="visuallyhidden">Название и описание</legend>
          {Boolean(errors?.title) && <p className={styles['error']}>{errors?.title?.message}</p>}
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
          </label>
          {Boolean(errors?.description) && <p className={styles['error']}>{errors?.description?.message}</p>}
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
          </label>
        </fieldset>
        <fieldset>
          <p className={styles['text-label']}>Обложка</p>
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
            {article.cover && <img className={styles['banner-img']} src={article.cover} alt="banner for comics" />}
          </label>
          <input
            type="file"
            id="banner"
            className={cn(styles['cover__input'], 'myvisuallyhidden')}
            {...register('cover', {
              required: true,
              onChange(event) {
                readImageFile(getValues('cover')[0]).then((data) => addCoverArticle(data));
              },
            })}
            accept="image/png, image/jpeg"
          />
          <div className={styles['upload-file']}>
            <p className={styles['text-label']}>Загрузить из файла .doc .docx</p>
            <div className={styles['upload-file__container']}>
              {article.htmlFromFile ? (
                <button onClick={() => removeText()} className={styles['text__remove']}>
                  Удалить
                </button>
              ) : (
                <label className={styles['text__label']} htmlFor="uploadFile">
                  Выбрать
                </label>
              )}

              <p className={styles['text__filename']}>{article.fileName}</p>
              <input
                type="file"
                id="uploadFile"
                className={cn(styles['text__input'], 'myvisuallyhidden')}
                {...register('htmlFromFile', {
                  required: false,
                })}
                onChange={(e) => handleTextChange(e)}
                accept=".doc,.docx"
              />
            </div>
          </div>
        </fieldset>
        <button
          disabled={isValid ? false : !isValid && article.cover ? false : true}
          onClick={() => router.push('/add-article/text')}
          className={styles['next-btn']}
        >
          Далее
        </button>
      </form>
    </AddArticle>
  );
};
export default NewArticleImages;
