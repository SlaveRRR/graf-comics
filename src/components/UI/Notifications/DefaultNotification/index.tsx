import { FC } from 'react';
import styles from './index.module.scss';
type Props = {
  notificationText: String;
  detailText: String;
};

const DefaultNotification: FC<Props> = ({ notificationText, detailText }) => {
  return (
    <div className={styles['notification']}>
      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3.5" cy="3.5" r="3.5" fill="#7A5AF8" />
      </svg>
      <div>
        <p className={styles['main']}>{notificationText}</p>
        <p className={styles['detail']}>{detailText}</p>
      </div>
    </div>
  );
};

export default DefaultNotification;
