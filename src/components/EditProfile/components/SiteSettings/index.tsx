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
          <input
            {...register('hideMatureContent')}
            className={styles['radio-btn__switch']}
            type="checkbox"
            id="hideMatureContent"
            value={'true'}
          />
          <span className={styles['radio-btn__switch-move']}></span>
          Скрыть +18 тайтлы
        </label>
        <p className={styles['profile-settings-form__text-label']}> Ночная тема</p>
        <label htmlFor="dark_mode" className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}>
          <input
            {...register('darkMode')}
            className={styles['radio-btn__switch']}
            type="checkbox"
            id="dark_mode"
            value="true"
          />
          <span className={styles['radio-btn__switch-move']}></span>
          Включить ночную тему
        </label>

        <div className={styles['profile-settings-form__notifications']}>
          <p className={cn(styles['profile-settings-form__text-label'])}> Уведомления</p>
          <label
            htmlFor="hide_notifications_subscribes"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('hideNotificationsSubscribes')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_subscribes"
              value={'true'}
            />
            <span className={styles['radio-btn__circle']}></span>
            Отключить уведомления о подписках
          </label>
          <label
            htmlFor="show_notifications_comments"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('hideNotificationsComments')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_comments"
              value={'true'}
            />
            <span className={styles['radio-btn__circle']}></span>
            Отключить уведомления о комментариях
          </label>
          <label
            htmlFor="hide_notifications_paid_content"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('hideNotificationsPaidContent')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_paid_content"
              value={'true'}
            />
            <span className={styles['radio-btn__circle']}></span>
            Отключить уведомления о платных главах
          </label>
          <label
            htmlFor="hide_notifications_likes"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('hideNotificationsLikes')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_likes"
              value={'true'}
            />
            <span className={styles['radio-btn__circle']}></span>
            Отключить уведомления о лайках
          </label>
          <label
            htmlFor="hide_notifications_gifts"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('hideNotificationsGifts')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_gifts"
              value={'true'}
            />
            <span className={styles['radio-btn__circle']}></span>
            Отключить уведомления о подарках
          </label>
          <label
            htmlFor="hide_notifications_new_posts"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('hideNotificationsNewPosts')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="hide_notifications_new_posts"
              value={'true'}
            />
            <span className={styles['radio-btn__circle']}></span>
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
            <input
              {...register('showNotificationsListsReading')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_reading"
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>
            Читаю
          </label>
          <label
            htmlFor="show_notifications_lists_read"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('showNotificationsListsRead')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_read"
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>
            Прочитано
          </label>
          <label
            htmlFor="show_notifications_lists_planned"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('showNotificationsListsPlanned')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_planned"
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>В планах
          </label>
          <label
            htmlFor="show_notifications_lists_liked"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('showNotificationsListsLiked')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_liked"
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>
            Любимые
          </label>
          <label
            htmlFor="show_notifications_lists_dropped "
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('showNotificationsListsDropped')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="show_notifications_lists_dropped "
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>
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
            <input
              {...register('emailNotificationsUpdates')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="email_notifications_updates"
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>
            Сообщения и обновления Граф Комикса
          </label>
          <label
            htmlFor="email_notifications_surveys"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('emailNotificationsSurveys')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="email_notifications_surveys"
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>
            Отзывы и опросы
          </label>
          <label
            htmlFor="email_notifications_reports"
            className={cn(styles['radio-btn__label'], styles['radio-btn__hide-subscribes'])}
          >
            <input
              {...register('emailNotificationsReports')}
              className={styles['radio-btn__input']}
              type="checkbox"
              id="email_notifications_reports"
              value="true"
            />
            <span className={styles['radio-btn__circle']}></span>
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
