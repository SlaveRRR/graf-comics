'use client';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { AddComics } from '@/components/shared';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import cn from 'classnames';
import styles from './index.module.scss';
import Image from 'next/image';

interface IFormData {
  title: string;
  description: string;
  cover: File[];
  banner: File;
}

async function readImageFile(file : File) : Promise<string> {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target.result as string); 
      reader.onerror = reject;
      reader.readAsDataURL(file);
  });
}

const readFiles = async (arr : File[]) : Promise<string[]> =>{
  
  const res = []
  for(let i of arr){
    let url = await readImageFile(i);
    if(/обложка/ig.test(i.name)){
      res.unshift(url)
    }
    else{
      res.push(url)
    }
  }
  return res
}


const NewComicsImages: FC = () => {
  const { register, handleSubmit, control,formState:{isValid},getValues } = useForm<IFormData>({
    mode:'onChange'
  });

  const [banner,setBanner] = useState<string>();
  const [cover,setCover] = useState<string[]>(["/bg-default.svg","/bg-default.svg","/bg-default.svg","/bg-default.svg"])
  const handler: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  console.log(isValid)
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
              {...register('title',{
                required:true
              })}
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
              rules={{
                required:true
              }}
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
              {...register('cover',{
                required:true,
                onChange(event) {
                  if(getValues('cover').length <= 4){
                    readFiles(getValues('cover')).then(data => setCover(data))
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
                src={cover[0]}
                alt="bg of comics"
              />
            </span>
           {
            cover.slice(1).map(el =>  <Image
              className={styles['cover-img__item']}
              width={83}
              height={100}
              src={el}
              alt="bg of comics"
            />)
           }
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
            {banner && <img className={styles['banner-img']} src={banner} alt='banner for comics' />}
          </label>
          <input
            type="file"
            id="banner"
            className={cn(styles['cover__input'], 'myvisuallyhidden')}
            {...register('banner',{
              required:true,
              onChange(event) {
                  readImageFile(getValues('banner')[0]).then(data => setBanner(data))
              },
            })}

            accept="image/png, image/jpeg"
          />
        </fieldset>
        <button disabled={!isValid}  className={styles['next-btn']}>Далее</button>
      </form>
    </AddComics>
  );
};

export default NewComicsImages;
