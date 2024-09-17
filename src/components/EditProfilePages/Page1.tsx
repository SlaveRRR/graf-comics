import cn from 'classnames';
import React, { FormEvent } from 'react';
import styles from './index.module.scss';

/* перенести в types.ts */
interface Page1Props {
  data: {
    username: string;
    about: string;
    user_sex: string;
    birth_date: string;
    residence_name: string;
    email: string;
    hide_subscribes: 'yes' | 'no';
    private_profile: 'yes' | 'no';
  };
  updateData: (
    data: Partial<{
      username: string;
      about: string;
      user_sex: string;
      birth_date: string;
      residence_name: string;
      email: string;
      hide_subscribes: 'yes' | 'no';
      private_profile: 'yes' | 'no';
    }>,
  ) => void;
}

const Page1: React.FC<Page1Props> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };
  const saveProfileData = async () => {
    await new Promise((resolve) => setTimeout(() => alert('Данные сохранены'), 1000));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    saveProfileData();
  };
  return (
    <form className={styles['profile-settings-form']} onSubmit={handleSubmit}>
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
          htmlFor="userNickname"
          className={cn(styles['profile-settings-form__username'], styles['profile-settings-form__label'])}
        >
          Никнейм
          <input
            className={cn(styles['username__input'], styles['label__input'])}
            id="userNickname"
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="Введите никнейм"
          />
        </label>
        <label htmlFor="userAbout" className={styles['profile-settings-form__label']}>
          О себе
          <textarea
            className={styles['label__textarea']}
            id="userAbout"
            name="about"
            value={data.about}
            /* onChange={} */
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
              /* checked={data.user_sex === 'female'}
                        onChange={handleChange} */
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
              /* checked={data.user_sex === 'male'}
                        onChange={handleChange} */
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
              /* checked={data.user_sex === 'not_stated'}
                        onChange={handleChange} */
            />
            Не указан
          </label>
        </div>
        <label htmlFor="userBirthDate" className={cn(styles['profile-settings-form__label'], styles['birth-date'])}>
          Дата рождения
          <input
            className={cn(styles['label__input'], styles['birth-date__input'])}
            id="userBirthDate"
            type="text"
            placeholder="ДД.ММ.ГГГГ"
            name="birth_date"
            value={data.birth_date}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="userTown" className={styles['profile-settings-form__label']}>
          Ваш город
          <input
            className={styles['label__input']}
            id="userTown"
            type="text"
            name="residence_name"
            value={data.residence_name}
            onChange={handleChange}
            placeholder="Введите название города"
          />
        </label>
        <label htmlFor="userEmail" className={styles['profile-settings-form__label']}>
          E-mail
          <input
            className={styles['label__input']}
            id="userEmail"
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Введите e-mail"
          />
        </label>

        <p className={styles['profile-settings-form__text-label']}> Скрыть подписки</p>
        <label
          htmlFor="hideSubscribes"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="radio"
            id="hideSubscribes"
            name="hide_subscribes"
            value="yes"
            /* checked={data.hide_subscribes === 'yes'}
                    onChange={handleChange} */
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
            type="radio"
            id="privateProfile"
            name="private_profile"
            value="yes"
            /* checked={data.private_profile === 'yes'}
                    onChange={handleChange} */
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
      <button type="submit" className={styles['save-btn']}>
        Сохранить
      </button>
    </form>
  );
};

export default Page1;
