import cn from 'classnames';
import React from 'react';
import styles from './index.module.scss';

/* перенести в types.ts */
interface Page2Props {
  data: {
    current_password: string;
    new_password: string;
  };
  updateData: (
    data: Partial<{
      new_password: string;
    }>,
  ) => void;
}

const Page2: React.FC<Page2Props> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <form className={styles['profile-settings-form']}>
      <fieldset className={'container'}>
        <legend className="visuallyhidden">Настройки безопасности профиля</legend>
        <p className={styles['profile-settings-form__text-change-password']}>Изменить пароль</p>
        <label htmlFor="currentPassword" className={styles['profile-settings-form__label']}>
          Текущий пароль
          <input
            className={styles['label__input']}
            id="currentPassword"
            type="text"
            name="current_password"
            value={data.current_password}
            onChange={handleChange}
            placeholder="Введите текущий пароль"
          />
        </label>
        <label
          htmlFor="newPassword"
          className={cn(styles['profile-settings-form__label'], styles['profile-settings-form__new-password'])}
        >
          Новый пароль
          <input
            className={styles['label__input']}
            id="newPassword"
            type="text"
            name="new_password"
            value={data.new_password}
            onChange={handleChange}
            placeholder="Введите новый пароль"
          />
          <input
            className={cn(styles['label__input'])}
            id="passwordConfirmation"
            type="text"
            name="password_confirmation"
            /* onChange={handleChange} */
            placeholder="Подтвердите новый пароль"
          />
        </label>
      </fieldset>
      <button type="submit" className={styles['save-btn']}>
        Сохранить
      </button>
    </form>
  );
};

export default Page2;
