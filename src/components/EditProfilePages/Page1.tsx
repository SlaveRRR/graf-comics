import cn from 'classnames';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './index.module.scss';
import { Page1EditProfileFormData, Page1Props } from './types';

const Page1: React.FC<Page1Props> = ({ data }) => {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    reset,
    handleSubmit,
  } = useForm<Page1EditProfileFormData>({
    mode: 'onChange',
    shouldFocusError: true,
  });
  return (
    <>
      <fieldset className={styles['profile-header']}>
        <legend className="visuallyhidden">Аватар профиля</legend>
        <div className={styles['profile__wallpaper']}>
          <img src="../profile-skeleton.svg" alt="avatar" className={styles['profile__img']} />
        </div>
        <div className={cn(styles['profile__container'], 'container')}>
          <p className={styles['profile__change']}>Изменить</p>
        </div>
      </fieldset>
      <fieldset className={'container'}>
        <legend className="visuallyhidden">Настройки профиля</legend>
        <label
          htmlFor="username"
          className={cn(styles['profile-settings-form__username'], styles['profile-settings-form__label'])}
        >
          Никнейм
          <input
            {...register('username', {
              minLength: {
                value: 7,
                message: 'Минимальная длина 7 символов',
              },
            })}
            className={cn(styles['username__input'], styles['label__input'], {
              [styles['label__input--error']]: errors?.username,
            })}
            type="text"
            id="username"
            placeholder="Введите никнейм"
            defaultValue={data.username}
          />
          {Boolean(errors?.username) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.username?.message}</p>
          )}
        </label>
        <label htmlFor="userAbout" className={styles['profile-settings-form__label']}>
          О себе
          <textarea
            className={styles['label__textarea']}
            id="userAbout"
            name="about"
            defaultValue={data.about}
            placeholder="Предумайте описание"
          />
        </label>

        <p className={styles['profile-settings-form__text-label']}> Пол</p>
        <div className={styles['profile-settings-form__radio-btn-container']}>
          <label htmlFor="female" className={styles['radio-btn__label']}>
            <span className={styles['radio-btn__circle']}></span>
            <input
              className={styles['radio-btn__input']}
              type="radio"
              id="female"
              name="user_sex"
              value="female"
              defaultChecked={data.user_sex === 'female'}
            />
            Женский
          </label>
          <label htmlFor="male" className={styles['radio-btn__label']}>
            <span className={styles['radio-btn__circle']}></span>
            <input
              className={styles['radio-btn__input']}
              type="radio"
              id="male"
              name="user_sex"
              value="male"
              defaultChecked={data.user_sex === 'male'}
            />
            Мужской
          </label>
          <label htmlFor="notStated" className={styles['radio-btn__label']}>
            <span className={styles['radio-btn__circle']}></span>
            <input
              className={styles['radio-btn__input']}
              type="radio"
              id="notStated"
              name="user_sex"
              value="not_stated"
              defaultChecked={data.user_sex ? data.user_sex === 'not_stated' : true}
            />
            Не указан
          </label>
        </div>
        <label htmlFor="birth_date" className={cn(styles['profile-settings-form__label'], styles['birth-date'])}>
          Дата рождения
          <input
            {...register('birth_date', {
              pattern: {
                value: /^([0-2][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{2}$/,
                message: 'Введите правильную дату рождения',
              },
            })}
            className={cn(styles['birth-date__input'], styles['label__input'], {
              [styles['label__input--error']]: errors?.birth_date,
            })}
            type="text"
            id="birth_date"
            placeholder="ДД.ММ.ГГ"
            autoComplete="off"
            defaultValue={data.birth_date}
          />
          {Boolean(errors?.birth_date) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.birth_date?.message}</p>
          )}
        </label>
        <label htmlFor="residence_name" className={styles['profile-settings-form__label']}>
          Ваш город
          <input
            {...register('residence_name', {})}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.residence_name,
            })}
            type="text"
            id="residence_name"
            placeholder="Введите название города"
            autoComplete="off"
            defaultValue={data.residence_name}
          />
        </label>
        <label htmlFor="email" className={styles['profile-settings-form__label']}>
          E-mail
          <input
            {...register('email', {
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: 'Введите правильный email',
              },
            })}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.email,
            })}
            type="email"
            id="email"
            placeholder="Введите e-mail"
            defaultValue={data.email}
          />
          {Boolean(errors?.email) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.email?.message}</p>
          )}
        </label>

        <p className={styles['profile-settings-form__text-label']}> Скрыть подписки</p>
        <label
          htmlFor="hideSubscribes"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="hideSubscribes"
            name="hide_subscribes"
            value="yes"
            defaultChecked={data.hide_subscribes === 'yes'}
          />
          Скрыть
        </label>
        <p className={styles['profile-settings-form__text-label']}> Закрытый профиль</p>
        <label
          htmlFor="privateProfile"
          className={cn(styles['radio-btn__label'], styles['radio-btn__private-profile'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="privateProfile"
            name="private_profile"
            value="yes"
            defaultChecked={data.private_profile === 'yes'}
          />
          Закрыть
        </label>
        <p className={styles['profile-settings-form__text-label']}> Ссылка</p>
        <span className={styles['profile-settings-form__add-link']}>
          <svg width="10" height="10" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          Добавить
        </span>
      </fieldset>
    </>
  );
};

export default Page1;
