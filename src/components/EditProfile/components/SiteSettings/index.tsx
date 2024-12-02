import cn from 'classnames';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '../../index.module.scss';
import { SiteSettingsFormSchema } from './types';

const SiteSettings: FC = () => {
  /*   const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    reset,
    handleSubmit,
  } = useForm<SiteSettingsFormSchema>({
    mode: 'onChange',
    shouldFocusError: true,
    defaultValues: defaultSettings,
  }); */

  const {
    register,
    formState: { errors },
  } = useFormContext<SiteSettingsFormSchema>();
  return (
    <div className={cn('container', styles['settings-container'])}>
      <fieldset className={styles['fieldset-container--without-pt']}>
        <legend className="visuallyhidden">Настройки сайта</legend>
        <label
          htmlFor="hideMatureContent"
          className={cn(styles['radio-btn__label'], styles['profile-settings-form__show-mature-content'])}
        >
          <span className={styles['radio-btn__circle']}></span>
          <input
            {...register('hideMatureContent')}
            className={styles['radio-btn__input']}
            type="checkbox"
            id="hideMatureContent"
            value={'true'}
          />
          Скрыть +18 тайтлы
        </label>
        <p className={styles['profile-settings-form__text-label']}> Ночная тема</p>
        <label htmlFor="dark_mode" className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}>
          <span className={styles['radio-btn__circle']}></span>
          <input
            {...register('darkMode')}
            className={styles['radio-btn__input']}
            type="checkbox"
            id="dark_mode"
            value="true"
          />
          Включить ночную тему
        </label>

        <div className={styles['profile-settings-form__notifications']}>
          <p className={cn(styles['profile-settings-form__text-label'])}> Уведомления</p>
          <label
            htmlFor="hide_notifications_subscribes"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('hideNotificationsSubscribes')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_subscribes"
              value={'true'}
            />
            Отключить уведомления о подписках
          </label>
          <label
            htmlFor="show_notifications_comments"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('hideNotificationsComments')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_comments"
              value={'true'}
            />
            Отключить уведомления о комментариях
          </label>
          <label
            htmlFor="hide_notifications_paid_content"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('hideNotificationsPaidContent')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_paid_content"
              value={'true'}
            />
            Отключить уведомления о платных главах
          </label>
          <label
            htmlFor="hide_notifications_likes"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('hideNotificationsLikes')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_likes"
              value={'true'}
            />
            Отключить уведомления о лайках
          </label>
          <label
            htmlFor="hide_notifications_gifts"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('hideNotificationsGifts')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_gifts"
              value={'true'}
            />
            Отключить уведомления о подарках
          </label>
          <label
            htmlFor="hide_notifications_new_posts"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('hideNotificationsNewPosts')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_new_posts"
              value={'true'}
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
              {...register('showNotificationsListsReading')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_reading"
              value="true"
            />
            Читаю
          </label>
          <label
            htmlFor="show_notifications_lists_read"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('showNotificationsListsRead')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_read"
              value="true"
            />
            Прочитано
          </label>
          <label
            htmlFor="show_notifications_lists_planned"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('showNotificationsListsPlanned')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_planned"
              value="true"
            />
            В планах
          </label>
          <label
            htmlFor="show_notifications_lists_liked"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('showNotificationsListsLiked')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_liked"
              value="true"
            />
            Любимые
          </label>
          <label
            htmlFor="show_notifications_lists_dropped "
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('showNotificationsListsDropped')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_dropped "
              value="true"
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
              {...register('emailNotificationsUpdates')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="email_notifications_updates"
              value="true"
            />
            Сообщения и обновления Граф Комикса
          </label>
          <label
            htmlFor="email_notifications_surveys"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('emailNotificationsSurveys')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="email_notifications_surveys"
              value="true"
            />
            Отзывы и опросы
          </label>
          <label
            htmlFor="email_notifications_reports"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <span className={styles['radio-btn__circle']}></span>
            <input
              {...register('emailNotificationsReports')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="email_notifications_reports"
              value="true"
            />
            Сообщения о нарушениях
          </label>
        </div>
        <button type="submit" className={styles['save-btn']}>
          Сохранить
        </button>
      </fieldset>
    </div>
  );
};

export default SiteSettings;
