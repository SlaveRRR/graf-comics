import cn from 'classnames';
import { FC } from 'react';
import styles from './index.module.scss';

const UserAgreement: FC = () => {
  return (
    <section className="agreement">
      <div className="container">
        <div className={styles['agreement__container']}>
          <h2 className={styles['agreement__header']}>Пользовательское соглашение</h2>
          <h3 className={styles['agreement__subheader']}>СОГЛАШЕНИЕ ОБ АВТОРСКИХ ПРАВАХ</h3>
          <p className={cn(styles['text'], styles['text--mb'])}>
            Настоящее соглашение (далее – «Соглашение») регулирует отношения между Администрацией сайта
            https://grafcomix.ru (далее – «Администрация») и пользователем (далее – «Пользователь»), использующим данный
            сайт для размещения, просмотра и распространения комиксов и иных материалов.
          </p>
          <h3 className={styles['agreement__subheader']}>1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
          <p className={styles['text']}>
            1.1. Настоящее Соглашение является юридически обязательным документом в соответствии с Гражданским кодексом
            Российской Федерации (ГК РФ), Федеральным законом РФ «О авторском праве и смежных правах» № 5351-1 от
            09.07.1993 г. и иными нормативно-правовыми актами, регулирующими авторские права.
          </p>
          <p className={styles['text']}>
            1.2. Регистрация и использование сайта означают полное и безоговорочное согласие Пользователя с условиями
            настоящего Соглашения.
          </p>
          <p className={cn(styles['text'], styles['text--mb'])}>
            1.3. Все размещенные на сайте комиксы и иные материалы могут охраняться авторским правом, и их использование
            регулируется действующим законодательством Российской Федерации.
          </p>
          <h3 className={styles['agreement__subheader']}>2. ПРАВА И ОБЯЗАННОСТИ ПОЛЬЗОВАТЕЛЯ</h3>
          <p className={styles['text']}>
            2.1. Пользователь гарантирует, что является автором или законным правообладателем размещаемых материалов
            либо имеет соответствующее разрешение от правообладателя на их публикацию.
          </p>
          <p className={styles['text']}>
            2.2. Пользователь соглашается не нарушать права третьих лиц, включая авторские и смежные права, а также не
            размещать контент, содержащий:
          </p>
          <ul className={styles['list']}>
            <li>Материалы, нарушающие законодательство Российской Федерации;</li>
            <li>
              Материалы, пропагандирующие насилие, экстремизм, порнографию, дискриминацию и иные запрещенные сведения.
            </li>
          </ul>
          <p className={styles['text']}>
            2.3. Размещая материалы на сайте, Пользователь предоставляет Администрации неисключительную лицензию на
            использование этих материалов в рамках функционирования сайта, включая право на их демонстрацию,
            распространение, хранение и публикацию.
          </p>
          <p className={cn(styles['text'], styles['text--mb'])}>
            2.4. Пользователь не вправе использовать материалы сайта в коммерческих целях без согласия их
            правообладателей.
          </p>
          <h3 className={styles['agreement__subheader']}>3. ПРАВА И ОБЯЗАННОСТИ АДМИНИСТРАЦИИ</h3>
          <p className={styles['text']}>
            3.1. Администрация предоставляет Пользователю платформу для размещения и распространения комиксов, но не
            несет ответственности за их содержание.
          </p>
          <p className={styles['text']}>
            3.2. В случае получения жалоб о нарушении авторских прав или других требований законодательства РФ,
            Администрация вправе удалить спорный контент без предварительного уведомления Пользователя.
          </p>
          <p className={styles['text']}>
            3.3. Администрация вправе заблокировать или удалить аккаунт Пользователя, нарушающего условия Соглашения.
          </p>
          <p className={cn(styles['text'], styles['text--mb'])}>
            3.4. Администрация не несет ответственности за убытки, возникшие у Пользователя в связи с удалением
            контента, блокировкой аккаунта или иными ограничениями, вызванными нарушением данного Соглашения.
          </p>
          <h3 className={styles['agreement__subheader']}>4. АВТОРСКИЕ ПРАВА</h3>
          <p className={styles['text']}>
            4.1. Все авторские права на размещенные Пользователем материалы сохраняются за их правообладателями.
          </p>
          <p className={styles['text']}>
            4.2. Пользователь предоставляет другим пользователям сайта право на просмотр, комментирование и
            распространение материалов в рамках возможностей, предоставляемых сайтом.
          </p>
          <p className={cn(styles['text'], styles['text--mb'])}>
            4.3. Запрещается копирование, модификация, коммерческое использование и иное незаконное использование
            материалов сайта без согласия их авторов.
          </p>
          <h3 className={styles['agreement__subheader']}>5. ОТВЕТСТВЕННОСТЬ СТОРОН</h3>
          <p className={styles['text']}>
            5.1. Пользователь несет полную ответственность за нарушение авторских прав и обязан самостоятельно
            урегулировать все претензии третьих лиц.
          </p>
          <p className={styles['text']}>
            5.2. Администрация не несет ответственности за действия Пользователей, размещающие материалы на сайте, но
            обязуется принимать меры при обнаружении нарушений законодательства.
          </p>
          <p className={cn(styles['text'], styles['text--mb'])}>
            5.3. В случае выявления нарушений Администрация вправе заблокировать или удалить материалы без
            предварительного уведомления Пользователя.
          </p>
          <h3 className={styles['agreement__subheader']}>6. РАЗРЕШЕНИЕ СПОРОВ</h3>
          <p className={styles['text']}>
            6.1. Все споры, возникающие в связи с настоящим Соглашением, подлежат урегулированию путем переговоров.
          </p>
          <p className={cn(styles['text'], styles['text--mb'])}>
            6.2. В случае невозможности разрешения спора в досудебном порядке он подлежит рассмотрению в суде по месту
            нахождения Администрации в соответствии с законодательством Российской Федерации.
          </p>
          <h3 className={styles['agreement__subheader']}>7. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h3>
          <p className={styles['text']}>
            7.1. Настоящее Соглашение вступает в силу с момента его публикации на сайте и действует до момента его
            изменения или отзыва Администрацией.
          </p>
          <p className={styles['text']}>
            7.2. Администрация оставляет за собой право изменять настоящее Соглашение, уведомляя Пользователей путем
            публикации новой редакции на сайте.
          </p>
          <p className={styles['text']}>
            7.3. Продолжение использования сайта после внесения изменений означает согласие Пользователя с обновленными
            условиями.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserAgreement;
