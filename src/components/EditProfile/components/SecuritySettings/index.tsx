import cn from 'classnames';
import { FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import styles from '../../index.module.scss';
import { SecuritySettingsFormSchema } from './types';

const SecuritySettings: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  /*   const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    reset,
    handleSubmit,
    control,
  } = useForm<SecuritySettingsFormSchema>({
    mode: 'onChange',
  });
 */
  const {
    control,
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
  } = useFormContext<SecuritySettingsFormSchema>();

  const currentPassword = useWatch({
    control,
    name: 'currentPassword',
  });
  return (
    <fieldset className={cn(styles['edit-container'], 'container')}>
      <legend className="visuallyhidden">Настройки безопасности профиля</legend>
      <p className={styles['profile-settings-form__text-change-password']}>Изменить пароль</p>
      <label htmlFor="current_password" className={styles['profile-settings-form__label']}>
        Текущий пароль
        <div className={styles['profile-settings-form__password-container']}>
          <input
            {...register('currentPassword', {
              required: 'Обязательное поле!',
              validate: (value) => value === currentPassword || 'Неверный текущий пароль',
            })}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.currentPassword,
              [styles['label__input--success']]: dirtyFields?.currentPassword && !errors?.currentPassword,
            })}
            id="current_password"
            type={visible ? 'text' : 'password'}
            placeholder="Введите текущий пароль"
            autoComplete="off"
          />
          {Boolean(errors?.currentPassword) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.currentPassword?.message}</p>
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
            {...register('newPassword', {
              required: 'Обязательное поле!',

              validate: {
                notIsCurrent: (value) => value !== currentPassword || 'Вы ввели текущий пароль',
                minLength: (value) => value.length >= 6 || 'Минимум 6 символов!',
                maxLength: (value) => value.length <= 12 || 'Максимум 12 символов!',
              },
            })}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.newPassword,
              [styles['label__input--success']]: dirtyFields?.newPassword && !errors?.newPassword,
            })}
            id="new_password"
            type={visible ? 'text' : 'password'}
            placeholder="Введите новый пароль"
            autoComplete="off"
          />
          {Boolean(errors?.newPassword) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.newPassword?.message}</p>
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
            {...register('newPasswordRepeat', {
              onBlur(event) {
                return getValues('newPassword') !== getValues('newPasswordRepeat')
                  ? setError('newPasswordRepeat', {
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
              [styles['label__input--error']]: errors?.newPasswordRepeat,
              [styles['label__input--success']]: dirtyFields?.newPasswordRepeat && !errors?.newPasswordRepeat,
            })}
            id="newPasswordRepeat"
            type={visible ? 'text' : 'password'}
            placeholder="Подтвердите новый пароль"
            autoComplete="off"
          />
          {Boolean(errors?.newPasswordRepeat) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.newPasswordRepeat?.message}</p>
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

export default SecuritySettings;
