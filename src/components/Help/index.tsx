import cn from 'classnames';
import { FC } from 'react';
import styles from './index.module.scss';

const Help: FC = () => {
  return (
    <section className="help">
      <div className="container">
        <div className={styles['help__container']}>
          <h2 className={styles['help__header']}>Помощь</h2>
          <h3 className={styles['help__subheader']}>Регистрация и аккаунт</h3>
          <p className={styles['text']}>Как зарегистрироваться на сайте?</p>
          <ul className={styles['list']}>
            <li>Нажмите кнопку "Регистрация" в правом верхнем углу сайта</li>
            <li> Заполните форму с вашими данными</li>
            <li>Подтвердите регистрацию по ссылке, отправленной на ваш email</li>
            <li>Войдите в систему под вашими данными</li>
          </ul>
          <p className={styles['text']}>Забыл пароль</p>
          <ul className={styles['list']}>
            <li>Нажмите "Забыли пароль" на странице входа</li>
            <li> Введите ваш email</li>
            <li>Следуйте инструкциям в письме с восстановлением</li>
            <li>Создайте новый пароль</li>
          </ul>
          <h3 className={styles['help__subheader']}>Публикация работ</h3>
          <p className={styles['text']}>Как опубликовать свою работу?</p>
          <ul className={styles['list']}>
            <li>Войдите в свой аккаунт</li>
            <li> Нажмите кнопку "Опубликовать работу"</li>
            <li>Заполните форму с информацией о работе</li>
            <li>Загрузите файлы с изображениями</li>
            <li>Подождите модерацию (до 72 часов)</li>
          </ul>
          <p className={styles['text']}>Требования к работам</p>
          <ul className={styles['list']}>
            <li>Формат изображений: JPG или PNG</li>
            <li> Работы должны быть оригинальными</li>
            <li>Качество изображений должно быть высоким</li>
          </ul>
          <h3 className={styles['help__subheader']}>Подписка и оплата</h3>
          <p className={styles['text']}>Как оформить премиум-подписку?</p>
          <ul className={styles['list']}>
            <li> Перейдите в раздел "Подписка"</li>
            <li> Выберите тип подписки</li>
            <li>Оплатите через один из доступных способов</li>
            <li>Подтвердите оплату</li>
          </ul>
          <p className={styles['text']}>Возврат средств</p>
          <ul className={styles['list']}>
            <li> Возможен в течение 14 дней при отсутствии активности</li>
            <li> Обратитесь в поддержку через форму обратной связи</li>
            <li>Приложите чек об оплате</li>
            <li>Опишите причину возврата</li>
          </ul>
          <h3 className={styles['help__subheader']}>Технические вопросы</h3>
          <p className={styles['text']}>Проблемы с загрузкой файлов</p>
          <ul className={styles['list']}>
            <li> Проверьте размер файла (не более 5 МБ)</li>
            <li>Проверьте формат (JPG или PNG)</li>
            <li>Обновите страницу и попробуйте снова</li>
            <li>При повторении проблемы - обратитесь в поддержку</li>
          </ul>
          <p className={styles['text']}>Проблемы с отображением сайта</p>
          <ul className={styles['list']}>
            <li> Очистите кэш браузера</li>
            <li>Обновите страницу</li>
            <li>Попробуйте другой браузер</li>
            <li>При необходимости - обратитесь в поддержку</li>
          </ul>
          <h3 className={styles['help__subheader']}>Как получить помощь</h3>
          <p className={styles['text']}>Контакты поддержки</p>
          <ul className={styles['list']}>
            <li>
              Техническая поддержка:{' '}
              <a className={styles['link']} href="mailto:support@site.com">
                support@site.com
              </a>
            </li>
            <li>
              Поддержка авторов:{' '}
              <a className={styles['link']} href="mailto:authors@site.com">
                authors@site.com
              </a>
            </li>
            <li>
              Вопросы по оплате:{' '}
              <a className={styles['link']} href="mailto:payment@site.com">
                payment@site.com
              </a>
            </li>
            <li>
              Общие вопросы:{' '}
              <a className={styles['link']} href="mailto: info@site.com">
                info@site.com
              </a>
            </li>
          </ul>
          <p className={styles['text']}>Время ответа</p>
          <ul className={styles['list']}>
            <li>Технические вопросы: до 24 часов</li>
            <li>Вопросы по оплате: до 24 часов</li>
            <li>Модерация работ: до 72 часов</li>
            <li>Общие вопросы: до 48 часов</li>
          </ul>
          <h3 className={styles['help__subheader']}>Решение проблем</h3>
          <p className={cn(styles['text'], styles['text--mb'])}>Авторам</p>
          <p className={styles['text']}>Работа не прошла модерацию</p>
          <ul className={styles['list']}>
            <li>Проверьте требования к публикации</li>
            <li>Убедитесь, что работа соответствует правилам</li>
            <li>При необходимости - обратитесь в поддержку</li>
          </ul>
          <p className={styles['text']}>Проблемы с загрузкой работ</p>
          <ul className={styles['list']}>
            <li>Проверьте размер и формат файлов</li>
            <li>Попробуйте загрузить работы по частям</li>
            <li>Обратитесь в техническую поддержку</li>
          </ul>
          <p className={cn(styles['text'], styles['text--mb'])}>Читателям</p>
          <p className={styles['text']}>Проблемы с подпиской</p>
          <ul className={styles['list']}>
            <li>Проверьте статус оплаты в личном кабинете</li>
            <li>Обновите страницу</li>
            <li>Обратитесь в поддержку по оплате</li>
          </ul>
          <p className={styles['text']}>Проблемы с доступом к контенту</p>
          <ul className={styles['list']}>
            <li>Проверьте статус вашей подписки</li>
            <li>Обновите страницу</li>
            <li>При необходимости - обратитесь в поддержку</li>
          </ul>
          <p className={styles['text']}>
            <b>Полезные советы</b>
          </p>
          <ul className={styles['list']}>
            <li>Регулярно проверяйте обновления правил сайта</li>
            <li>Используйте актуальные версии браузеров</li>
            <li>Сохраняйте чеки об оплате</li>
            <li>При возникновении проблем - сразу обращайтесь в поддержку</li>
          </ul>
          <p className={styles['text']}>
            Наша команда всегда готова помочь вам решить любые вопросы и проблемы. Мы ценим ваше время и делаем всё
            возможное для создания комфортных условий как для авторов, так и для читателей.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Help;
