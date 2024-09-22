import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../index.module.scss';
import { defaultSettings } from './constants';
import { ProfileSettingsFormSchema } from './types';

const ProfileSettings: FC = () => {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    reset,
    handleSubmit,
  } = useForm<ProfileSettingsFormSchema>({
    mode: 'onChange',
    shouldFocusError: true,
    defaultValues: defaultSettings,
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
            placeholder="Предумайте описание"
          />
        </label>

        <p className={styles['profile-settings-form__text-label']}> Пол</p>
        <div className={styles['profile-settings-form__radio-btn-container']}>
          <label htmlFor="female" className={styles['radio-btn__label']}>
            <span className={styles['radio-btn__circle']}></span>
            <input className={styles['radio-btn__input']} type="radio" id="female" name="gender" value="female" />
            Женский
          </label>
          <label htmlFor="male" className={styles['radio-btn__label']}>
            <span className={styles['radio-btn__circle']}></span>
            <input className={styles['radio-btn__input']} type="radio" id="male" name="gender" value="male" />
            Мужской
          </label>
          <label htmlFor="notStated" className={styles['radio-btn__label']}>
            <span className={styles['radio-btn__circle']}></span>
            <input
              className={styles['radio-btn__input']}
              type="radio"
              id="notStated"
              name="gender"
              value="not_stated"
            />
            Не указан
          </label>
        </div>
        <label htmlFor="birthDate" className={cn(styles['profile-settings-form__label'], styles['birth-date'])}>
          Дата рождения
          <input
            {...register('birthDate', {
              pattern: {
                value: /^([0-2][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{2}$/,
                message: 'Введите правильную дату рождения',
              },
            })}
            className={cn(styles['birth-date__input'], styles['label__input'], {
              [styles['label__input--error']]: errors?.birthDate,
            })}
            type="text"
            id="birthDate"
            placeholder="ДД.ММ.ГГ"
            autoComplete="off"
          />
          {Boolean(errors?.birthDate) && (
            <p className={styles['profile-settings-form__error-text']}>{errors?.birthDate?.message}</p>
          )}
        </label>
        <label htmlFor="residenceName" className={styles['profile-settings-form__label']}>
          Ваш город
          <input
            {...register('residenceName', {})}
            className={cn(styles['label__input'], {
              [styles['label__input--error']]: errors?.residenceName,
            })}
            type="text"
            id="residenceName"
            placeholder="Введите название города"
            autoComplete="off"
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
            name="hideSubscribes"
            value="yes"
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
            name="privateProfile"
            value="yes"
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

export default ProfileSettings;
