'use client';
import cn from 'classnames';
import { FC, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Tabs } from '../UI';
import ProfileSettings from './components/ProfileSettings';
import SecuritySettings from './components/SecuritySettings';
import SiteSettings from './components/SiteSettings';
import styles from './index.module.scss';
import { BackendData, EditProfileFormSchema, LocalStorageData } from './types';

const EditProfile: FC = () => {
  const getDefaultValues = async (): Promise<EditProfileFormSchema> => {
    /* Тут должа быть логика получения данных из бэка */

    const fetchBackendData = async (): Promise<BackendData> => {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Эмуляция задержки
      const backendValues: BackendData = {
        username: 'RuslanitoSS',
        about: 'Lorem20 не рабоатет',
        gender: 'male',
        birthDate: '12.12.12',
        residenceName: '',
        email: 'supro@ha.com',
        currentPassword: 'qwerty',
        newPassword: '',
        newPasswordRepeat: '',
      };
      return backendValues;
    };

    // Получение данных с бэкенда
    const backendData = await fetchBackendData();
    // Получение данных с бэкенда
    /* Получем поля:
    Имя
    О себе
    Пол
    Дата рождения
    Ваш город
    E-mail
    Пароль
     */

    // Получение данных из localStorage
    const localStorageValues: LocalStorageData = {
      hideSubscribes: JSON.parse(localStorage.getItem('hideSubscribes') || 'false'),
      privateProfile: JSON.parse(localStorage.getItem('privateProfile') || 'false'),
      hideMatureContent: JSON.parse(localStorage.getItem('hideMatureContent') || 'false'),
      darkMode: JSON.parse(localStorage.getItem('darkMode') || 'false'),
      hideNotificationsSubscribes: JSON.parse(localStorage.getItem('hideNotificationsSubscribes') || 'false'),
      hideNotificationsComments: JSON.parse(localStorage.getItem('hideNotificationsComments') || 'false'),
      hideNotificationsPaidContent: JSON.parse(localStorage.getItem('hideNotificationsPaidContent') || 'false'),
      hideNotificationsLikes: JSON.parse(localStorage.getItem('hideNotificationsLikes') || 'false'),
      hideNotificationsGifts: JSON.parse(localStorage.getItem('hideNotificationsGifts') || 'false'),
      hideNotificationsNewPosts: JSON.parse(localStorage.getItem('hideNotificationsNewPosts') || 'false'),
      showNotificationsListsReading: JSON.parse(localStorage.getItem('showNotificationsListsReading') || 'false'),
      showNotificationsListsRead: JSON.parse(localStorage.getItem('showNotificationsListsRead') || 'false'),
      showNotificationsListsPlanned: JSON.parse(localStorage.getItem('showNotificationsListsPlanned') || 'false'),
      showNotificationsListsLiked: JSON.parse(localStorage.getItem('showNotificationsListsLiked') || 'false'),
      showNotificationsListsDropped: JSON.parse(localStorage.getItem('showNotificationsListsDropped') || 'false'),
      emailNotificationsUpdates: JSON.parse(localStorage.getItem('emailNotificationsUpdates') || 'false'),
      emailNotificationsSurveys: JSON.parse(localStorage.getItem('emailNotificationsSurveys') || 'false'),
      emailNotificationsReports: JSON.parse(localStorage.getItem('emailNotificationsReports') || 'false'),
    };

    // Объединение данных из бэкенда и localStorage
    const defaultValues: EditProfileFormSchema = Object.assign({}, backendData, localStorageValues);

    return defaultValues;
  };

  /* Отрисовываем форму сначала пустой. потом обновляем значения, когда их получим */
  const methods = useForm<EditProfileFormSchema>({
    defaultValues: {},
    mode: 'onChange',
  });
  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    const loadDefaultValues = async () => {
      const defaultValues = await getDefaultValues();
      reset(defaultValues); // Обновляем значения формы
    };

    loadDefaultValues();
  }, [reset]);

  const handler: SubmitHandler<EditProfileFormSchema> = (data) => {
    try {
      /* Как и в каком формате сохранять данные на бэк я не знаю */

      /* Сохранения данных в localStorage */
      localStorage.setItem('hideSubscribes', JSON.stringify(data.hideSubscribes));
      localStorage.setItem('privateProfile', JSON.stringify(data.privateProfile));
      localStorage.setItem('hideMatureContent', JSON.stringify(data.hideMatureContent));
      localStorage.setItem('darkMode', JSON.stringify(data.darkMode));
      localStorage.setItem('hideNotificationsSubscribes', JSON.stringify(data.hideNotificationsSubscribes));
      localStorage.setItem('hideNotificationsComments', JSON.stringify(data.hideNotificationsComments));
      localStorage.setItem('hideNotificationsPaidContent', JSON.stringify(data.hideNotificationsPaidContent));
      localStorage.setItem('hideNotificationsLikes', JSON.stringify(data.hideNotificationsLikes));
      localStorage.setItem('hideNotificationsGifts', JSON.stringify(data.hideNotificationsGifts));
      localStorage.setItem('hideNotificationsNewPosts', JSON.stringify(data.hideNotificationsNewPosts));
      localStorage.setItem('showNotificationsListsReading', JSON.stringify(data.showNotificationsListsReading));
      localStorage.setItem('showNotificationsListsRead', JSON.stringify(data.showNotificationsListsRead));
      localStorage.setItem('showNotificationsListsPlanned', JSON.stringify(data.showNotificationsListsPlanned));
      localStorage.setItem('showNotificationsListsLiked', JSON.stringify(data.showNotificationsListsLiked));
      localStorage.setItem('showNotificationsListsDropped', JSON.stringify(data.showNotificationsListsDropped));
      localStorage.setItem('emailNotificationsUpdates', JSON.stringify(data.emailNotificationsUpdates));
      localStorage.setItem('emailNotificationsSurveys', JSON.stringify(data.emailNotificationsSurveys));
      localStorage.setItem('emailNotificationsReports', JSON.stringify(data.emailNotificationsReports));
    } catch (error) {}
  };

  return (
    <section className={cn(styles['tabs'], styles['container'])}>
      <FormProvider {...methods}>
        <form className={styles['profile-settings-form']} onSubmit={methods.handleSubmit(handler)}>
          <Tabs mixClass={[styles['tabs__items']]} tabs={['Профиль', 'Безопасность', 'Настройки сайта']}>
            <ProfileSettings />
            <SecuritySettings />
            <SiteSettings />
          </Tabs>
          <button type="submit" className={styles['save-btn']} disabled={isSubmitting}>
            Сохранить
          </button>
        </form>
      </FormProvider>
    </section>
  );
};

export default EditProfile;
