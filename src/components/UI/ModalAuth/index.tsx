'use client';
import { EmailVerification } from '@/components/Registration';
import { SocialAuthLinks } from '@/components/shared';
import { emailRegexp, passwordRegexp } from '@/constants';
import { ctx } from '@/context/contextProvider';
import cn from 'classnames';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackSvg } from 'public/back';
import { FC, useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'sonner';
import Logo from '../Logo';
import styles from './index.module.scss';

type FormData = {
  email: string;
  password: string;
};

const ModalAuth: FC = () => {
  const [visible, setVisible] = useState(false);
  const [auth, setAuth] = useState(true);
  const router = useRouter();

  const { activeModal, setActiveModal, setActiveLoader } = useContext(ctx);

  const validateUsernameOrEmail = (value) => {
    if (!value) {
      return 'Поле обязательно для заполнения';
    }
    if (!emailRegexp.test(value) && !/^[a-zA-Z0-9_-]{3,}$/.test(value)) {
      return 'Введите никнейм или e-mail';
    }
    return true;
  };

  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const handler: SubmitHandler<FormData> = async (data) => {
    setActiveLoader(true);
    try {
      const isSignin = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (isSignin?.error) {
        return toast.error(isSignin.error);
      }
      if (isSignin?.ok) {
        router.replace('/');
        return;
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setActiveLoader(false);
    }
  };

  return (
    <CSSTransition appear={true} timeout={1500} in={activeModal} mountOnEnter unmountOnExit classNames={{ ...styles }}>
      <div className={styles['modal']}>
        <div className={styles['container']}>
          <div className={styles['container__backLink']} onClick={() => setActiveModal(false)}>
            <BackSvg />
            <p className={styles['container__backLink--arrow']}>Вернуться назад</p>
          </div>
          <div className={styles['login__logo']}>
            <Logo mixClass={['login__logo']} />
          </div>
          {auth ? (
            <>
              <h2 className={styles['login__head']}>Вход</h2>
              <p className={styles['login__with-social']}>через соцсети</p>
              <SocialAuthLinks mixClass={[styles['login__social']]} />
              <p className={styles['login__or']}>или</p>

              <form onSubmit={handleSubmit(handler)}>
                <fieldset className={styles['login__fieldset']}>
                  <legend className="visuallyhidden">Пользовательские данные</legend>
                  <label className={styles['login__label']} htmlFor="email">
                    Никнейм или эл. почта
                  </label>
                  <input
                    {...register('email', {
                      required: true,
                      validate: validateUsernameOrEmail,
                    })}
                    className={cn(styles['login__input'], {
                      [styles['login__input--success']]: dirtyFields?.email && !errors?.email,
                    })}
                    type="text"
                    id="email"
                    placeholder="Введите ник или e-mail"
                    autoComplete="on"
                  />
                  <label className={styles['login__label']} htmlFor="pass">
                    Пароль
                  </label>
                  {Boolean(errors?.password) && <p className={styles['login__error']}>{errors?.password?.message}</p>}
                  <div className={styles['login__password-container']}>
                    <input
                      {...register('password', {
                        required: 'Обязательное поле!',
                        pattern: {
                          value: passwordRegexp,
                          message: 'Пароль должен содержать 8 символов или более, включая 1 цифру.',
                        },
                      })}
                      className={cn(styles['login__input'], {
                        [styles['login__input--error']]: errors?.password,
                        [styles['login__input--success']]: dirtyFields?.password && !errors?.password,
                      })}
                      id="pass"
                      type={visible ? 'text' : 'password'}
                      placeholder="Введите пароль"
                    />
                    <button
                      type="button"
                      onPointerDown={() => setVisible(!visible)}
                      className={styles['login__visibility']}
                    >
                      {!visible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                          <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </fieldset>
                <input className={styles['login__signin-btn']} type="submit" value="Войти" />
              </form>
            </>
          ) : (
            <>
              <EmailVerification />
            </>
          )}
          <div className={styles['login__signin']}>
            {auth ? (
              <>
                Еще нет аккаунта?
                <Link href={'#'} className={styles['login__link']} onClick={() => setAuth(!auth)}>
                  Зарегистрируйтесь
                </Link>
              </>
            ) : (
              <>
                Уже есть аккаунт?{' '}
                <Link href={'#'} className={styles['login__link']} onClick={() => setAuth(!auth)}>
                  Войти
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalAuth;
