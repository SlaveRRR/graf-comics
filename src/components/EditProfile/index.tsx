'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import cn from 'classnames';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Page1 from '../EditProfilePages/Page1';
import Page2 from '../EditProfilePages/Page2';
import Page3 from '../EditProfilePages/Page3';
import { Tabs } from '../UI';
import styles from './index.module.scss';
import { EditProfileFormData, ProfileData } from './types';

const EditProfile: FC = () => {
  /*  const { data } = useSession(); */

  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    reset,
    handleSubmit,
  } = useForm<EditProfileFormData>({
    mode: 'onChange',
    shouldFocusError: true,
  });
  const { setItem, getItem, removeItem } = useLocalStorage();

  const [profileData, setProfileData] = useState<ProfileData>({
    page1: {
      username: 'RuslanitoSS',
      about: 'Lorem20 не рабоатет',
      user_sex: 'male',
      birth_date: '12.12.12',
      residence_name: '',
      email: 'supro@ha.com',
      hide_subscribes: null,
      private_profile: 'yes',
    },
    page2: { current_password: 'qwerty' },
    page3: {
      show_mature_content: null,
      night_mode: null,
      show_notifications_subscribes: null,
      show_notifications_comments: 'yes',
      show_notifications_paid_content: null,
      show_notifications_likes: null,
      show_notifications_gifts: 'yes',
      show_notifications_new_posts: null,
      show_notifications_lists_reading: 'yes',
      show_notifications_lists_read: null,
      show_notifications_lists_planned: null,
      show_notifications_lists_liked: null,
      show_notifications_lists_dropped: null,
      email_notifications_updates: 'yes',
      email_notifications_surveys: null,
      email_notifications_reports: null,
    },
  });

  const saveProfileData = async () => {
    await new Promise((resolve) => setTimeout(() => alert('Данные сохранены'), 1000));
  };

  const handler: SubmitHandler<EditProfileFormData> = async () => {
    try {
      console.log('данные сохранены');
      /* saveProfileData(); */
    } catch (error) {
      alert(error);
    } finally {
    }
  };
  return (
    <section className={cn(styles['tabs'], styles['container'])}>
      <form className={styles['profile-settings-form']} onSubmit={handleSubmit(handler)}>
        <Tabs mixClass={[styles['tabs__items']]} tabs={['Профиль', 'Безопасность', 'Настройки сайта']}>
          <Page1 data={profileData.page1} />
          <Page2 data={profileData.page2} />
          <Page3 data={profileData.page3} />
        </Tabs>
        <button type="submit" className={styles['save-btn']}>
          Сохранить
        </button>
      </form>
    </section>
  );
};

export default EditProfile;
