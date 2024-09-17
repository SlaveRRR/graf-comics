'use client';
import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { FC, FormEvent, useState } from 'react';
import Page1 from '../EditProfilePages/Page1';
import Page2 from '../EditProfilePages/Page2';
import Page3 from '../EditProfilePages/Page3';
import { Tabs } from '../UI';
import styles from './index.module.scss';

/* Перенести в types.ts */
interface ProfileData {
  page1: {
    username: string;
    about: string;
    user_sex: string;
    birth_date: string;
    residence_name: string;
    email: string;
    hide_subscribes: 'yes' | null;
    private_profile: 'yes' | null;
  };
  page2: {
    current_password: string;
    new_password: string;
  };
  page3: {
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
}
const EditProfile: FC = () => {
  const { data } = useSession();
  /* Один handle submit на все страницы
   */

  const [profileData, setProfileData] = useState<ProfileData>({
    page1: {
      username: '',
      about: '',
      user_sex: '',
      birth_date: '',
      residence_name: '',
      email: '',
      hide_subscribes: null,
      private_profile: null,
    },
    page2: { current_password: '', new_password: '' },
    page3: {
      show_mature_content: null,
      night_mode: null,
      show_notifications_subscribes: null,
      show_notifications_comments: null,
      show_notifications_paid_content: null,
      show_notifications_likes: null,
      show_notifications_gifts: null,
      show_notifications_new_posts: null,
      show_notifications_lists_reading: null,
      show_notifications_lists_read: null,
      show_notifications_lists_planned: null,
      show_notifications_lists_liked: null,
      show_notifications_lists_idk: null,
      email_notifications_updates: null,
      email_notifications_surveys: null,
      email_notifications_reports: null,
    },
  });
  /* Передавать хуеи от react-forms в page1-3 */
  const updateProfileData = (page: keyof ProfileData, data: Partial<ProfileData[keyof ProfileData]>) => {
    setProfileData((prev) => ({
      ...prev,
      [page]: {
        ...prev[page],
        ...data,
      },
    }));
  };

  const saveProfileData = async () => {
    await new Promise((resolve) => setTimeout(() => alert('Данные сохранены'), 1000));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    saveProfileData();
  };

  return (
    <section className={cn(styles['tabs'], styles['container'])}>
      <Tabs mixClass={[styles['tabs__items']]} tabs={['Профиль', 'Безопасность', 'Настройки сайта']}>
        <Page1 data={profileData.page1} updateData={(data) => updateProfileData('page1', data)} />
        <Page2 data={profileData.page2} updateData={(data) => updateProfileData('page2', data)} />
        <Page3 data={profileData.page3} updateData={(data) => updateProfileData('page3', data)} />
      </Tabs>
    </section>
  );
};

export default EditProfile;
