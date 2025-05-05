import { FC } from 'react';
import styles from './index.module.scss';

const RulesToUse: FC = () => {
  return (
    <section className="rules">
      <div className="container">
        <div className={styles['container']}>
          <h2 className={`${styles['text']} ${styles['text--font-size-20']} ${styles['text--bold']} ${styles['text--margin-bottom-20']}`}>
            Правила и условия пользования подпиской
          </h2>

          <h3 className={`${styles['text']} ${styles['text--bold']} ${styles['text--left']} ${styles['text--margin-bottom-10']}`}>
            Пробная подписка
          </h3>
          <ul className={styles['list']}>
            <li>Новые пользователи получают бесплатный доступ ко всем функциям сайта на одну неделю.</li>
            <li>Пробная подписка доступна только один раз для каждого пользователя.</li>
            <li>Возможно участие в розыгрышах для получения дополнительных пробных подписок.</li>
          </ul>

          <h3 className={`${styles['text']} ${styles['text--bold']} ${styles['text--left']} ${styles['text--margin-bottom-10']}`}>
            Условия отмены подписки
          </h3>
          <ul className={styles['list']}>
            <li>При отмене платной подписки возврат денежных средств не производится.</li>
            <li>Подписка будет действовать до окончания оплаченного периода и не будет автоматически продлеваться после отмены.</li>
          </ul>

          <h3 className={`${styles['text']} ${styles['text--bold']} ${styles['text--left']} ${styles['text--margin-bottom-10']}`}>
            Возврат денежных средств
          </h3>
          <ul className={styles['list']}>
            <li>Возврат средств возможен только через службу технической поддержки.</li>
            <li>Запрос на возврат должен быть подан не позднее чем через 3 дня с момента покупки.</li>
            <li>Возврат средств осуществляется при соблюдении условий использования и политики возврата.</li>
          </ul>

          <h3 className={`${styles['text']} ${styles['text--bold']} ${styles['text--left']} ${styles['text--margin-bottom-10']}`}>
            Общие положения
          </h3>
          <ul className={styles['list']}>
            <li>Используя наш сайт, вы соглашаетесь с данными условиями подписки и основными правилами.</li>
            <li>Администрация сайта оставляет за собой право вносить изменения в условия подписки и правила использования. Изменения вступают в силу с момента их публикации на сайте.</li>
            <li>В случае возникновения вопросов или проблем, пожалуйста, обращайтесь в службу технической поддержки.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RulesToUse;
