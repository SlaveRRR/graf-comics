'use client';
import { api } from '@/api';
import { emailRegexp, passwordRegexp } from '@/constants';
import { useModal } from '@/context/modalProvider';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useWindowSize } from '@/hooks/useWindowSize';
import { authService } from '@/services/auth';
import cn from 'classnames';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'sonner';
import { ctx } from '../../context/contextProvider';
import { Logo } from '../UI';
import { ModalSignup } from '../UI/ModalSignup';
import { BackLink, SocialAuthLinks } from '../shared';
import animantionStyles from './animation.module.scss';
import styles from './index.module.scss';
type FormData = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  isAgree: boolean;
};

const Registration = () => {
  const [visible, setVisible] = useState(false);
  const { setActiveLoader } = useContext(ctx);
  const [seconds, setSeconds] = useState(60);
  const [activationButton, setActivationButton] = useState(false);
  const [isTimer, setIsTimer] = useState(false);
  const { setItem, getItem, removeItem } = useLocalStorage();
  const router = useRouter();
  const params = useSearchParams();
  const [verify, setVerify] = useState(false);
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
    setError,
    setValue,
    reset,
    handleSubmit,
  } = useForm<FormData>({
    mode: 'onChange',
    shouldFocusError: true,
  });
  const handleVerifyEmail = (): void => {
    setActivationButton(true);
  };

  const { size } = useWindowSize();

  const { openModal } = useModal();

  const handler: SubmitHandler<FormData> = async (data) => {
    const user = {
      email: data['email'],
      name: data['username'],
      password: data['password'],
    };
    try {
      const response = await api.post('/send-email-link', {
        email: user.email,
      });
      toast.success(`Мы отправили ссылку для активации на ${data['email']}`);
      setItem('verify', user.email);
      setIsTimer(true);
    } catch (error) {
      toast.error(error.response.statusText);
    }
  };
  const signUpHanlder: SubmitHandler<FormData> = async (data) => {
    const user = {
      email: data['email'],
      name: data['username'],
      password: data['password'],
    };
    try {
      const response = await authService.signup(user);

      setActiveLoader(true);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      const isSignin = await signIn('credentials', {
        password: getValues('password'),
        login: getValues('email'),
        authKey: 'email',
        redirect: false,
      });
      if (isSignin?.ok) {
        setActiveLoader(true);
        router.replace('/');
        toast.success('Вы успешно зарегистрировались!');
        setActiveLoader(false);
        return;
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setActiveLoader(false);
    }
  };
  useEffect(() => {
    if (getItem('verify') && params.get('activate')) {
      setValue('email', getItem('verify') as string);
      setVerify(true);
      return;
    }
    removeItem('verify');
  }, []);
  useEffect(() => {
    if (!isTimer) {
      return;
    }
    if (seconds === 0) {
      setSeconds(60);
      return setIsTimer(false);
    }
    const timerId = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [isTimer, seconds]);

  useEffect(() => {
    if (size !== 'mobile') {
      return openModal(<ModalSignup />, { bg: true });
    }
  }, [size]);

  return (
    <section className={styles['registration']}>
      <div className={cn(styles['registration__container'], 'container')}>
        <BackLink mixClass={[styles['registration__backLink']]} />
        <div className={styles['registration__inner-container']}>
          <Logo isHeader={false} mixClass={[styles['registration__logo']]} />
          <CSSTransition
            timeout={500}
            in={!activationButton}
            unmountOnExit
            classNames={{
              enter: animantionStyles['form-enter'],
              enterActive: animantionStyles['form-enterActive'],
              exit: animantionStyles['form-exit'],
              exitActive: animantionStyles['form-exitActive'],
            }}
          >
            <div className={styles['registration__flex']}>
              <h2 className={styles['registration__head']}>Регистрация</h2>
              <p className={styles['registration__with-social']}>через соцсети</p>
              <SocialAuthLinks mixClass={[styles['registration__social']]} />
              <p className={styles['registration__or']}>или</p>
            </div>
          </CSSTransition>
          <CSSTransition
            timeout={500}
            in={!activationButton}
            unmountOnExit
            classNames={{
              enter: animantionStyles['form-enter'],
              enterActive: animantionStyles['form-enterActive'],
              exit: animantionStyles['form-exit'],
              exitActive: animantionStyles['form-exitActive'],
            }}
          >
            <form>
              <fieldset className={styles['registration__fieldset']}>
                <legend className="visuallyhidden">Пользовательские данные</legend>
                {verify && (
                  <>
                    <label className={styles['registration__label']} htmlFor="username">
                      Никнейм
                    </label>
                    <input
                      {...register('username', {
                        required: true,
                        minLength: {
                          value: 7,
                          message: 'Минимальная длина 7 символов',
                        },
                      })}
                      className={cn(styles['registration__input'], {
                        [styles['registration__input--error']]: errors?.username,
                        [styles['registration__input--success']]: dirtyFields?.username && !errors?.username,
                      })}
                      type="text"
                      placeholder="Придумайте никнейм"
                    />
                  </>
                )}
                {!verify && (
                  <>
                    <label className={styles['registration__label']} htmlFor="mail">
                      Электронная почта
                    </label>
                    {Boolean(errors?.email) && <p className={styles['registration__error']}>Заполние e-mail!</p>}
                    <input
                      {...register('email', {
                        required: true,
                        pattern: {
                          value: emailRegexp,
                          message: 'Введите правильный email',
                        },
                      })}
                      className={cn(styles['registration__input'], {
                        [styles['registration__input--error']]: errors?.email,
                        [styles['registration__input--success']]: dirtyFields?.email && !errors?.email,
                      })}
                      type="email"
                      placeholder="Введите e-mail"
                    />
                  </>
                )}
              </fieldset>

              {!errors?.username && dirtyFields?.username ? (
                <>
                  <fieldset className={styles['registration__fieldset-password']}>
                    <label className={styles['registration__label']} htmlFor="pass">
                      Пароль
                    </label>
                    {Boolean(errors?.password) && (
                      <p className={styles['registration__error']}>{errors?.password?.message}</p>
                    )}
                    <div className={styles['registration__password-container']}>
                      <input
                        {...register('password', {
                          required: 'Обязательное поле!',
                          pattern: {
                            value: passwordRegexp,
                            message: 'Пароль должен содержать 8 символов или более, включая 1 цифру.',
                          },
                          onBlur(event) {
                            return getValues('password') !== getValues('repeatPassword')
                              ? setError('repeatPassword', {
                                  type: 'Custom',
                                  message: 'Пароли должны совпадать!',
                                })
                              : false;
                          },
                        })}
                        className={cn(styles['registration__input'], {
                          [styles['registration__input--error']]: errors?.password,
                          [styles['registration__input--success']]: dirtyFields?.password && !errors?.password,
                        })}
                        type={visible ? 'text' : 'password'}
                        placeholder="Придумайте пароль"
                      />
                      <button
                        type="button"
                        onPointerDown={() => setVisible(!visible)}
                        className={styles['registration__visibility']}
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
                    <label className={styles['registration__label']} htmlFor="repeatpass">
                      Повторите пароль
                    </label>
                    {Boolean(errors?.repeatPassword) && (
                      <p className={styles['registration__error']}>{errors?.repeatPassword?.message}</p>
                    )}
                    <div className={styles['registration__password-container']}>
                      <input
                        {...register('repeatPassword', {
                          onBlur(event) {
                            return getValues('password') !== getValues('repeatPassword')
                              ? setError('password', {
                                  type: 'Custom',
                                  message: 'Пароли должны совпадать!',
                                })
                              : false;
                          },
                          required: 'Обязательное поле!',
                          pattern: {
                            value: passwordRegexp,
                            message: 'Пароль должен содержать 8 символов или более, включая 1 цифру.',
                          },
                        })}
                        className={cn(styles['registration__input'], {
                          [styles['registration__input--error']]: errors?.repeatPassword,
                          [styles['registration__input--success']]:
                            dirtyFields?.repeatPassword && !errors?.repeatPassword,
                        })}
                        type={visible ? 'text' : 'password'}
                        placeholder="Повторите пароль"
                      />
                      <button
                        type="button"
                        onPointerDown={() => setVisible(!visible)}
                        className={styles['registration__visibility']}
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
                    {Boolean(errors?.isAgree) && (
                      <p className={styles['registration__error']}>{errors?.isAgree?.message}</p>
                    )}
                    <div className={styles['agreement']}>
                      <label className={styles['agreement__label']} htmlFor="agree">
                        Согласен с обработкой данных
                      </label>
                      <input
                        {...register('isAgree', {
                          required: 'Обязательное поле!',
                        })}
                        className={styles['agreement__input']}
                        type="checkbox"
                        id="agree"
                      />
                    </div>
                  </fieldset>
                  <button className={styles['registration__ready']} type="button" onClick={handleSubmit(signUpHanlder)}>
                    Готово
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleVerifyEmail} className={styles['registration__next']} type="button">
                    Далее
                  </button>
                </>
              )}
            </form>
          </CSSTransition>
          <CSSTransition
            timeout={500}
            in={activationButton}
            unmountOnExit
            classNames={{
              enter: animantionStyles['btn-enter'],
              enterActive: animantionStyles['btn-enterActive'],
              exit: animantionStyles['btn-exit'],
              exitActive: animantionStyles['btn-exitActive'],
            }}
          >
            <div>
              <button
                className={styles['registration__reset-email']}
                onClick={() => {
                  setActivationButton(false);
                }}
              >
                Ввести почту заново
              </button>
              <button disabled={isTimer} className={styles['registration__next']} onClick={handleSubmit(handler)}>
                Отправить ссылку для активации почты
              </button>
              {isTimer && <p className={styles['registration__timer-text']}>До повторной отправки {seconds} сек.</p>}
            </div>
          </CSSTransition>
        </div>

        <p className={styles['registration__signin']}>
          Уже есть аккаунт?{' '}
          <Link className={styles['registration__link']} href={'/auth/signin'}>
            Войдите
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Registration;
