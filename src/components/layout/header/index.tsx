'use client';
import { FC, useContext } from 'react';
import { ctx } from '../../../context/contextProvider';

import { Avatar, BurgerMenu } from '../../UI/index';

import { routes, sideMenuRoutes } from '@/config/routing';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './index.module.scss';

import { signOut, useSession } from 'next-auth/react';

const Header: FC = () => {
  const { status, data } = useSession();
  const router = useRouter();

  const { setActiveBurger, activeBurger, setActiveModal, setActiveAvatar, activeAvatar, visibleMenu } = useContext(ctx);

  const path = usePathname();

  const handleSignOut = () => {
    signOut();
    router.replace('/');
  };

  const handleBurgerClick = () => {
    setActiveBurger((prev) => !prev);
    setActiveAvatar(false);
  };

  const handleAvatarClick = () => {
    setActiveAvatar((prev) => !prev);
    setActiveBurger(false);
  };

  return (
    visibleMenu && (
      <header className={styles['header']}>
        <div className={cn(styles['header-container'], 'container')}>
          <nav
            className={cn(styles['nav'], {
              [styles['nav--active']]: activeBurger,
            })}
          >
            {Object.entries(routes).map(([text, url], i) => (
              <>
                <Link
                  className={`${
                    path === url ? cn(styles['menu-link'], styles['menu-link--active']) : styles['menu-link']
                  }`}
                  key={i}
                  href={url}
                  onClick={() => setActiveBurger(false)}
                >
                  {text}
                </Link>
                <span className={styles['line']}></span>
              </>
            ))}

            <Link onClick={() => setActiveBurger(false)} className={styles['add-comics']} href={'/add-comics/images'}>
              Добавить комикс
            </Link>
            <Link onClick={() => setActiveBurger(false)} className={styles['add-comics']} href={'/add-article/images'}>
              Добавить статью
            </Link>

            {/* <Switch
              checked={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none">
                  <g clipPath="url(#clip0_989_1122)">
                    <path
                      d="M7.22299 9.53058C5.69153 9.53058 4.4486 8.28765 4.4486 6.75619C4.4486 5.22473 5.69153 3.9818 7.22299 3.9818C8.75445 3.9818 9.99738 5.22473 9.99738 6.75619C9.99738 8.28765 8.75445 9.53058 7.22299 9.53058ZM7.22299 5.09156C6.30744 5.09156 5.55836 5.84064 5.55836 6.75619C5.55836 7.67174 6.30744 8.42083 7.22299 8.42083C8.13854 8.42083 8.88763 7.67174 8.88763 6.75619C8.88763 5.84064 8.13854 5.09156 7.22299 5.09156ZM7.77787 2.31717V0.652534C7.77787 0.347351 7.52817 0.0976562 7.22299 0.0976562C6.91781 0.0976562 6.66811 0.347351 6.66811 0.652534V2.31717C6.66811 2.62235 6.91781 2.87205 7.22299 2.87205C7.52817 2.87205 7.77787 2.62235 7.77787 2.31717ZM7.77787 12.8598V11.1952C7.77787 10.89 7.52817 10.6403 7.22299 10.6403C6.91781 10.6403 6.66811 10.89 6.66811 11.1952V12.8598C6.66811 13.165 6.91781 13.4147 7.22299 13.4147C7.52817 13.4147 7.77787 13.165 7.77787 12.8598ZM3.33884 6.75619C3.33884 6.45101 3.08915 6.20131 2.78397 6.20131H1.11933C0.814148 6.20131 0.564453 6.45101 0.564453 6.75619C0.564453 7.06137 0.814148 7.31107 1.11933 7.31107H2.78397C3.08915 7.31107 3.33884 7.06137 3.33884 6.75619ZM13.8815 6.75619C13.8815 6.45101 13.6318 6.20131 13.3267 6.20131H11.662C11.3568 6.20131 11.1071 6.45101 11.1071 6.75619C11.1071 7.06137 11.3568 7.31107 11.662 7.31107H13.3267C13.6318 7.31107 13.8815 7.06137 13.8815 6.75619ZM4.28769 3.82089C4.50409 3.60448 4.50409 3.25491 4.28769 3.03851L3.17793 1.92875C2.96153 1.71235 2.61195 1.71235 2.39555 1.92875C2.17915 2.14516 2.17915 2.49473 2.39555 2.71113L3.50531 3.82089C3.61628 3.93186 3.755 3.9818 3.89927 3.9818C4.04354 3.9818 4.18226 3.92631 4.29323 3.82089H4.28769ZM12.056 11.5892C12.2724 11.3728 12.2724 11.0232 12.056 10.8068L10.9462 9.69704C10.7298 9.48064 10.3802 9.48064 10.1638 9.69704C9.94744 9.91345 9.94744 10.263 10.1638 10.4794L11.2736 11.5892C11.3846 11.7002 11.5233 11.7501 11.6676 11.7501C11.8118 11.7501 11.9506 11.6946 12.0615 11.5892H12.056ZM3.17793 11.5892L4.28769 10.4794C4.50409 10.263 4.50409 9.91345 4.28769 9.69704C4.07128 9.48064 3.72171 9.48064 3.50531 9.69704L2.39555 10.8068C2.17915 11.0232 2.17915 11.3728 2.39555 11.5892C2.50653 11.7002 2.64525 11.7501 2.78951 11.7501C2.93378 11.7501 3.0725 11.6946 3.18348 11.5892H3.17793ZM10.9462 3.82089L12.056 2.71113C12.2724 2.49473 12.2724 2.14516 12.056 1.92875C11.8396 1.71235 11.49 1.71235 11.2736 1.92875L10.1638 3.03851C9.94744 3.25491 9.94744 3.60448 10.1638 3.82089C10.2748 3.93186 10.4135 3.9818 10.5578 3.9818C10.7021 3.9818 10.8408 3.92631 10.9518 3.82089H10.9462Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_989_1122">
                      <rect width="13.3171" height="13.3171" fill="white" transform="translate(0.564453 0.0976562)" />
                    </clipPath>
                  </defs>
                </svg>
              }
              unchecked={
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18">
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                </svg>
              }
            /> */}
          </nav>
          <nav
            className={cn(styles['right-nav'], {
              [styles['right-nav--active']]: activeAvatar && status === 'authenticated',
            })}
          >
            <figure className={styles['avatar']}>
              <figcaption className={styles['avatar__name']}>{data?.user.name}</figcaption>
              <Avatar />
            </figure>
            <span className={styles['line']}></span>
            {Object.entries(sideMenuRoutes).map(([text, url], i) => (
              <>
                <Link
                  className={`${
                    path === url ? cn(styles['menu-link'], styles['menu-link--active']) : styles['menu-link']
                  }`}
                  key={i + 1}
                  href={url}
                  onClick={() => setActiveAvatar(false)}
                >
                  {text}
                </Link>
                <span className={styles['line']}></span>
              </>
            ))}
            <button className={styles['auth-btn']} onClick={() => handleSignOut()}>
              Выйти
            </button>
          </nav>

          <BurgerMenu isActive={activeBurger} onClick={handleBurgerClick} />
          <Link href={'/'}>
            <picture className={styles['logo-mobile']}>
              <source type="image/webp" srcSet="/logo-mobile.webp 1x, /logo-mobile2x.webp 2x, /logo-mobile3x.webp 3x" />
              <img
                srcSet="
                     /logo-mobile.png 1x,
                     /logo-mobile2x.png 2x,
                     /logo-mobile3x.png 3x"
                src="/logo.png"
                alt="логотип"
              />
            </picture>
          </Link>
          {status === 'authenticated' || status === 'loading' ? (
            <button onClick={handleAvatarClick} className={styles['right-menu-btn']}>
              <Avatar />
            </button>
          ) : (
            <>
              <Link className={styles['signin-link']} href={'/auth/signin'}>
                Войти
              </Link>
              <button onClick={() => handleSignOut()} className={styles['signin-btn']}>
                Войти
              </button>
            </>
          )}
        </div>
      </header>
    )
  );
};

export default Header;
