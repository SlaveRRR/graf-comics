'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import cn from 'classnames';
import { FC } from 'react';
import { Tabs } from '../UI';
import ProfileSettings from './components/ProfileSettings';
import SecuritySettings from './components/SecuritySettings';
import SiteSettings from './components/SiteSettings';
import styles from './index.module.scss';

const EditProfile: FC = () => {
  const { setItem, getItem, removeItem } = useLocalStorage();

  return (
    <section className={cn(styles['tabs'], styles['container'])}>
      <form className={styles['profile-settings-form']}>
        <Tabs mixClass={[styles['tabs__items']]} tabs={['Профиль', 'Безопасность', 'Настройки сайта']}>
          <ProfileSettings />
          <SecuritySettings />
          <SiteSettings />
        </Tabs>
        <button type="button" className={styles['save-btn']}>
          Сохранить
        </button>
      </form>
    </section>
  );
};

export default EditProfile;
