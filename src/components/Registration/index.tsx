'use client';

import { api } from '@/api';
import { emailRegexp, passwordRegexp } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { authService } from '@/services/auth';
import cn from 'classnames';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ctx } from '../../context/contextProvider';
import { Logo } from '../UI';
import { SocialAuthLinks } from '../shared';
import styles from './index.module.scss';

type FormData = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  isAgree: boolean;
};

export const EmailVerification = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({ mode: 'onChange', shouldFocusError: true });
  const { setItem } = useLocalStorage();
  const [isTimer, setIsTimer] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [active, setActive] = useState(true);

  const handleVerifyEmail: SubmitHandler<FormData> = async (data) => {
    try {
      await api.post('/send-email-link', { email: data.email });
      toast.success(`Мы отправили ссылку для активации на ${data.email}`);
      setItem('verify', data.email);
      setIsTimer(true);
    } catch (error) {
      toast.error(error.response?.statusText || 'Ошибка при отправке ссылки');
    }
  };

  useEffect(() => {
    if (!isTimer) return;
    if (seconds === 0) {
      setSeconds(60);
      setIsTimer(false);
      return;
    }
    const timerId = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    return () => clearInterval(timerId);
  }, [isTimer, seconds]);

  return (
    <div className={styles['registration']}>
      <h2 className={styles['registration__head']}>Регистрация</h2>
      <p className={styles['registration__with-social']}>через соцсети</p>
      <SocialAuthLinks mixClass={[styles['registration__social']]} />
      <p className={styles['registration__or']}>или</p>

      {active ? (
        <form onSubmit={handleSubmit(handleVerifyEmail)} className={styles['registration__form']}>
          <label htmlFor="mail" className={styles['registration__label']}>
            Электронная почта
          </label>
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: emailRegexp,
                message: 'Введите никнейм или e-mail',
              },
            })}
            className={cn(styles['registration__input'], {
              [styles['registration__input--success']]: dirtyFields?.email && !errors?.email,
            })}
            type="text"
            id="email"
            placeholder="Введите e-mail"
            autoComplete="on"
          />
          <button
            onClick={() => {
              {
                handleVerifyEmail;
                setActive(!active);
              }
            }}
            className={styles['registration__next--button']}
          >
            Далее
          </button>
        </form>
      ) : (
        <div>
          <button className={styles['registration__reset-email']} onClick={() => setActive(true)}>
            Ввести почту заново
          </button>
          <button
            disabled={isTimer}
            className={styles['registration__next']}
            onClick={isTimer ? undefined : handleSubmit(handleVerifyEmail)}
          >
            Отправить ссылку для активации почты
          </button>
          {isTimer && <p className={styles['registration__timer-text']}>До повторной отправки {seconds} сек.</p>}
        </div>
      )}
    </div>
  );
};

export const Registration = () => {
  const {
    register,
    setError,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({ mode: 'onChange', shouldFocusError: true });
  const router = useRouter();
  const { setActiveLoader } = useContext(ctx);
  const [visible, setVisible] = useState(false);
  const [emailStored, setEmailStored] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('verify')?.replace(/['"]/g, '');
      setEmailStored(email);
    }
  }, []);

  const signUpHandler: SubmitHandler<FormData> = async (data) => {
    const user = { email: emailStored, name: data.username, password: data.password };
    setActiveLoader(true);
    try {
      const response = await authService.signup(user);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      await signIn('credentials', { email: data.email, password: data.password, redirect: false });
      router.replace('/');
      toast.success('Вы успешно зарегистрировались!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setActiveLoader(false);
    }
  };

  return (
    <div className={styles['box']}>
      <form onSubmit={handleSubmit(signUpHandler)} className={styles['registration-box']}>
        <div className={styles['registration-box__logo']}>
          <Logo mixClass={['registration-box__logo']} />
        </div>
        <h2 className={styles['registration-box__head']}>Регистрация</h2>

        <input
          {...register('username', {
            required: true,
            minLength: { value: 7, message: 'Минимальная длина 7 символов' },
          })}
          className={cn(styles['registration-box__input'], {
            [styles['registration-box__input--error']]: errors.username,
            [styles['registration-box__input--success']]: dirtyFields.username && !errors.username,
          })}
          type="text"
          placeholder="Придумайте никнейм"
        />
        {Boolean(errors?.password) && <p className={styles['registration-box__error']}>{errors?.password?.message}</p>}
        <div className={styles['registration-box__password-container']}>
          <input
            {...register('password', {
              required: 'Обязательное поле!',
              pattern: {
                value: passwordRegexp,
                message: 'Пароль должен содержать 8 символов или более, включая 1 цифру.',
              },
            })}
            className={cn(styles['registration-box__input'], {
              [styles['registration-box__input--error']]: errors?.password,
              [styles['registration-box__input--success']]: dirtyFields?.password && !errors?.password,
            })}
            type={visible ? 'text' : 'password'}
            placeholder="Придумайте пароль"
          />

          <button
            type="button"
            onPointerDown={() => setVisible(!visible)}
            className={styles['registration-box__visibility']}
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

        <button
          onClick={() => {
            handleSubmit(signUpHandler);
          }}
          className={styles['registration-box__ready']}
          disabled={!getValues('username') || !getValues('password')}
        >
          Готово
        </button>
      </form>
    </div>
  );
};
