import cn from 'classnames';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './index.module.scss';
import { Page3EditProfileFormData, Page3Props } from './types';

const Page3: React.FC<Page3Props> = ({ data }) => {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    reset,
    handleSubmit,
  } = useForm<Page3EditProfileFormData>({
    mode: 'onChange',
    shouldFocusError: true,
  });

  return (
    <fieldset className={'container'}>
      <legend className="visuallyhidden">Настройки сайта</legend>
      <label
        htmlFor="show_mature_content"
        className={cn(styles['radio-btn__label'], styles['profile-settings-form__show-mature-content'])}
      >
        <span className={styles['radio-btn__circle']}></span>
        <input
          className={styles['radio-btn__input']}
          type="checkbox"
          id="show_mature_content"
          name="show_mature_content"
          value={null}
          defaultChecked={data.show_mature_content == null}
        />
        Скрыть +18 тайтлы
      </label>
      <p className={styles['profile-settings-form__text-label']}> Ночная тема</p>
      <label htmlFor="night_mode" className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}>
        <span className={styles['radio-btn__circle']}></span>
        <input
          className={styles['radio-btn__input']}
          type="checkbox"
          id="night_mode"
          name="night_mode"
          value="yes"
          defaultChecked={data.night_mode == 'yes'}
        />
        Включить ночную тему
      </label>

      <div className={styles['profile-settings-form__notifications']}>
        <p className={cn(styles['profile-settings-form__text-label'])}> Уведомления</p>
        <label
          htmlFor="show_notifications_subscribes"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_subscribes"
            name="show_notifications_subscribes"
            value={null}
            defaultChecked={data.show_notifications_subscribes == null}
          />
          Отключить уведомления о подписках
        </label>
        <label
          htmlFor="show_notifications_comments"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_comments"
            name="show_notifications_comments"
            value={null}
            defaultChecked={data.show_notifications_comments == null}
          />
          Отключить уведомления о комментариях
        </label>
        <label
          htmlFor="show_notifications_paid_content"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_paid_content"
            name="show_notifications_paid_content"
            value={null}
            defaultChecked={data.show_notifications_paid_content == null}
          />
          Отключить уведомления о платных главах
        </label>
        <label
          htmlFor="show_notifications_likes"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_likes"
            name="show_notifications_likes"
            value={null}
            defaultChecked={data.show_notifications_likes == null}
          />
          Отключить уведомления о лайках
        </label>
        <label
          htmlFor="show_notifications_gifts"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_gifts"
            name="show_notifications_gifts"
            value={null}
            defaultChecked={data.show_notifications_gifts == null}
          />
          Отключить уведомления о подарках
        </label>
        <label
          htmlFor="show_notifications_new_posts"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_new_posts"
            name="show_notifications_new_posts"
            value={null}
            defaultChecked={data.show_notifications_new_posts == null}
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
          htmlFor="show_notifications_lists_reading"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_lists_reading"
            name="show_notifications_lists_reading"
            value="yes"
            defaultChecked={data.show_notifications_lists_reading == 'yes'}
          />
          Читаю
        </label>
        <label
          htmlFor="show_notifications_lists_read"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_lists_read"
            name="show_notifications_lists_read"
            value="yes"
            defaultChecked={data.show_notifications_lists_read == 'yes'}
          />
          Прочитано
        </label>
        <label
          htmlFor="show_notifications_lists_planned"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_lists_planned"
            name="show_notifications_lists_planned"
            value="yes"
            defaultChecked={data.show_notifications_lists_planned == 'yes'}
          />
          В планах
        </label>
        <label
          htmlFor="show_notifications_lists_liked"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_lists_liked"
            name="show_notifications_lists_liked"
            value="yes"
            defaultChecked={data.show_notifications_lists_liked == 'yes'}
          />
          Любимые
        </label>
        <label
          htmlFor="show_notifications_lists_dropped "
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="show_notifications_lists_dropped "
            name="show_notifications_lists_dropped "
            value="yes"
            defaultChecked={data.show_notifications_lists_dropped == 'yes'}
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
          htmlFor="email_notifications_updates"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="email_notifications_updates"
            name="email_notifications_updates"
            value="yes"
            defaultChecked={data.email_notifications_updates == 'yes'}
          />
          Сообщения и обновления Граф Комикса
        </label>
        <label
          htmlFor="email_notifications_surveys"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="email_notifications_surveys"
            name="email_notifications_surveys"
            value="yes"
            defaultChecked={data.email_notifications_surveys == 'yes'}
          />
          Отзывы и опросы
        </label>
        <label
          htmlFor="email_notifications_reports"
          className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            className={styles['radio-btn__input']}
            type="checkbox"
            id="email_notifications_reports"
            name="email_notifications_reports"
            value="yes"
            defaultChecked={data.email_notifications_reports == 'yes'}
          />
          Сообщения о нарушениях
        </label>
      </div>
    </fieldset>
  );
};

export default Page3;
