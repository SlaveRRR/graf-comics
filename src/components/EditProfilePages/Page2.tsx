import cn from 'classnames';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './index.module.scss';
import { Page2EditProfileFormData, Page2Props } from './types';

const Page2: React.FC<Page2Props> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    reset,
    handleSubmit,
  } = useForm<Page2EditProfileFormData>({
    mode: 'onChange',
    shouldFocusError: true,
  });

  return (
    <fieldset className={'container'}>
      <legend className="visuallyhidden">Настройки безопасности профиля</legend>
      <p className={styles['profile-settings-form__text-change-password']}>Изменить пароль</p>
      <label htmlFor="current_password" className={styles['profile-settings-form__label']}>
        Текущий пароль
        <div className={styles['profile-settings-form__password-container']}>
          <input
            {...register('current_password', {
              required: 'Обязательное поле!',
              validate: (value) => value === data.current_password || 'Неверный текущий пароль',
            })}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.current_password,
              [styles['label__input--success']]: dirtyFields?.current_password && !errors?.current_password,
            })}
            id="current_password"
            type={visible ? 'text' : 'password'}
            placeholder="Введите текущий пароль"
            autoComplete="off"
          />
          {Boolean(errors?.current_password) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.current_password?.message}</p>
          )}
          <button
            type="button"
            onPointerDown={() => setVisible(!visible)}
            className={styles['profile-settings-form__visibility']}
          >
            {!visible ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
              </svg>
            )}
          </button>
        </div>
      </label>
      <label
        htmlFor="new_password"
        className={cn(styles['profile-settings-form__label'], styles['profile-settings-form__new-password'])}
      >
        Новый пароль
        <div className={styles['profile-settings-form__password-container']}>
          <input
            {...register('new_password', {
              required: 'Обязательное поле!',

              validate: {
                notIsCurrent: (value) => value !== data.current_password || 'Вы ввели текущий пароль',
                minLength: (value) => value.length >= 6 || 'Минимум 6 символов!',
                maxLength: (value) => value.length <= 12 || 'Максимум 12 символов!',
              },
            })}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.new_password,
              [styles['label__input--success']]: dirtyFields?.new_password && !errors?.new_password,
            })}
            id="new_password"
            type={visible ? 'text' : 'password'}
            placeholder="Введите новый пароль"
            autoComplete="off"
          />
          {Boolean(errors?.new_password) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.new_password?.message}</p>
          )}
          <button
            type="button"
            onPointerDown={() => setVisible(!visible)}
            className={styles['profile-settings-form__visibility']}
          >
            {!visible ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
              </svg>
            )}
          </button>
        </div>
        <div className={cn(styles['profile-settings-form__password-container'])}>
          <input
            {...register('new_password_repeat', {
              onBlur(event) {
                return getValues('new_password') !== getValues('new_password_repeat')
                  ? setError('new_password_repeat', {
                      type: 'Custom',
                      message: 'Пароли должны совпадать!',
                    })
                  : false;
              },
              required: 'Обязательное поле!',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов!',
              },
              maxLength: {
                value: 12,
                message: 'Максимум 12 символов!',
              },
            })}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.new_password_repeat,
              [styles['label__input--success']]: dirtyFields?.new_password_repeat && !errors?.new_password_repeat,
            })}
            id="new_password_repeat"
            type={visible ? 'text' : 'password'}
            placeholder="Подтвердите новый пароль"
            autoComplete="off"
          />
          {Boolean(errors?.new_password_repeat) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.new_password_repeat?.message}</p>
          )}
          <button
            type="button"
            onPointerDown={() => setVisible(!visible)}
            className={styles['profile-settings-form__visibility']}
          >
            {!visible ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
              </svg>
            )}
          </button>
        </div>
      </label>
    </fieldset>
  );
};

export default Page2;
