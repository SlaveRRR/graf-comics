import cn from 'classnames';
import React from 'react';
import styles from './index.module.scss';

/* перенести в types.ts */
interface Page3Props {
  data: {
    show_mature_content: 'yes' | null;
    night_mode: 'yes' | null;
    show_notifications_subscribes: 'yes' | null;
    show_notifications_comments: 'yes' | null;
    show_notifications_paid_content: 'yes' | null;
    show_notifications_likes: 'yes' | null;
    show_notifications_gifts: 'yes' | null;
    show_notifications_new_posts: 'yes' | null;
    show_notifications_lists_reading: 'yes' | null;
    show_notifications_lists_read: 'yes' | null;
    show_notifications_lists_planned: 'yes' | null;
    show_notifications_lists_liked: 'yes' | null;
    show_notifications_lists_idk: 'yes' | null;
    email_notifications_updates: 'yes' | null;
    email_notifications_surveys: 'yes' | null;
    email_notifications_reports: 'yes' | null;
  };
  updateData: (
    data: Partial<{
      show_mature_content: 'yes' | null;
      night_mode: 'yes' | null;
      show_notifications_subscribes: 'yes' | null;
      show_notifications_comments: 'yes' | null;
      show_notifications_paid_content: 'yes' | null;
      show_notifications_likes: 'yes' | null;
      show_notifications_gifts: 'yes' | null;
      show_notifications_new_posts: 'yes' | null;
      show_notifications_lists_reading: 'yes' | null;
      show_notifications_lists_read: 'yes' | null;
      show_notifications_lists_planned: 'yes' | null;
      show_notifications_lists_liked: 'yes' | null;
      show_notifications_lists_idk: 'yes' | null;
      email_notifications_updates: 'yes' | null;
      email_notifications_surveys: 'yes' | null;
      email_notifications_reports: 'yes' | null;
    }>,
  ) => void;
}

const Page3: React.FC<Page3Props> = ({ data, updateData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <form className={styles['profile-settings-form']}>
      <fieldset className={'container'}>
        <legend className="visuallyhidden">Настройки сайта</legend>
        <label
          htmlFor="show_mature_content"
          className={cn(styles['radio-btn__label'], styles['profile-settings-form__show-mature-content'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="radio"
            id="show_mature_content"
            name="show_mature_content"
            value="yes"
            /* checked={data.show_mature_content === 'yes'}
          onChange={handleChange} */
          />
          Скрыть +18 тайтлы
        </label>
        <p className={styles['profile-settings-form__text-label']}> Ночная тема</p>
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
          Включить ночную тему
        </label>

        <div className={styles['profile-settings-form__notifications']}>
          <p className={cn(styles['profile-settings-form__text-label'])}> Уведомления</p>
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
            Отключить уведомления о подписках
          </label>
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
            Отключить уведомления о комментариях
          </label>
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
            Отключить уведомления о платных главах
          </label>
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
            Отключить уведомления о лайках
          </label>
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
            Отключить уведомления о подарках
          </label>
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
            Отключить уведомления о новых постах
          </label>
        </div>
        <div
          className={cn(
            styles['profile-settings-form__notifications-lists'],
            styles['profile-settings-form__notifications'],
          )}
        >
          <p className={styles['profile-settings-form__text-label']}> Уведомления из списков</p>
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
            Читаю
          </label>
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
            Прочитано
          </label>
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
            В планах
          </label>
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
            Любимые
          </label>
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
            Брошено
          </label>
        </div>
        <div
          className={cn(
            styles['profile-settings-form__notifications-email'],
            styles['profile-settings-form__notifications'],
          )}
        >
          <p className={styles['profile-settings-form__text-label']}> Уведомления по электронной почте</p>
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
            Сообщения и обновления Граф Комикса
          </label>
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
            Отзывы и опросы
          </label>
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
            Сообщения о нарушениях
          </label>
        </div>
      </fieldset>
      <button type="submit" className={styles['save-btn']}>
        Сохранить
      </button>
    </form>
  );
};

export default Page3;
