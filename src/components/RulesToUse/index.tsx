import cn from 'classnames';
import { FC } from 'react';

import styles from './index.module.scss';

const RulesToUse: FC = () => {
  return (
    <div className={cn(styles['container'])}>
      <h1
        className={cn(
          styles['text--margin-bottom-20'],
          styles['text'],
          styles['text--font-size-20'],
          styles['text--bold'],
        )}
      >
        Правила и условия пользования подпиской
      </h1>
      <p className={cn(styles['text--left'], styles['text--margin-bottom-20'])}>
        <span className={cn(styles['text--bold'], styles['text--left'])}> Пробная подписка </span>
        <br />
        - Новые пользователи получают бесплатный доступ ко всем функциям сайта на одну неделю.
        <br />
        - Пробная подписка доступна только один раз для каждого пользователя.
        <br />- Возможно участие в розыгрышах для получения дополнительных пробных подписок.
      </p>

      <p className={cn(styles['text--left'], styles['text--margin-bottom-20'])}>
        <span className={cn(styles['text--bold'], styles['text--left'])}> Условия отмены подписки</span>
        <br />
        - При отмене платной подписки возврат денежных средств не производится.
        <br />- Подписка будет действовать до окончания оплаченного периода и не будет автоматически продлеваться после
        отмены.
      </p>

      <p className={cn(styles['text--left'], styles['text--margin-bottom-20'])}>
        <span className={cn(styles['text--bold'], styles['text--left'])}> Возврат денежных средств</span>
        <br />
        - Возврат средств возможен только через службу технической поддержки.
        <br />
        - Запрос на возврат должен быть подан не позднее чем через 3 дня с момента покупки.
        <br />- Возврат средств осуществляется при соблюдении условий использования и политики возврата.
      </p>

      <p className={cn(styles['text--left'], styles['text--margin-bottom-20'])}>
        <span className={cn(styles['text--bold'], styles['text--left'])}> Общие положения</span>
        <br />
        - Используя наш сайт, вы соглашаетесь с данными условиями подписки и основными правилами.
        <br />
        - Администрация сайта оставляет за собой право вносить изменения в условия подписки и правила использования.
        Изменения вступают в силу с момента их публикации на сайте.
        <br />- В случае возникновения вопросов или проблем, пожалуйста, обращайтесь в службу технической поддержки
      </p>
    </div>
  );
};

export default RulesToUse;
