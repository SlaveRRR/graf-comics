import { FC } from 'react';
import styles from './index.module.scss';
type Props = {
  errorText: String;
};

const ErrorNotification: FC<Props> = ({ errorText }) => {
  return (
    <div className={styles['notification']}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2509_22424)">
          <path
            d="M8 9.66992C8.27613 9.66992 8.5 9.44606 8.5 9.16992V5.16992C8.5 4.89379 8.27613 4.66992 8 4.66992C7.72387 4.66992 7.5 4.89379 7.5 5.16992V9.16992C7.5 9.44606 7.72387 9.66992 8 9.66992Z"
            fill="#E54545"
          />
          <path
            d="M7.9987 10.502C8.3669 10.502 8.66536 10.8004 8.66536 11.1686C8.66536 11.5368 8.3669 11.8353 7.9987 11.8353C7.6305 11.8353 7.33203 11.5368 7.33203 11.1686C7.33203 10.8004 7.6305 10.502 7.9987 10.502Z"
            fill="#E54545"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.832031 8.00065C0.832031 4.04261 4.04066 0.833984 7.9987 0.833984C11.9568 0.833984 15.1654 4.04261 15.1654 8.00065C15.1654 11.9587 11.9568 15.1673 7.9987 15.1673C4.04066 15.1673 0.832031 11.9587 0.832031 8.00065ZM7.9987 1.83398C4.59294 1.83398 1.83203 4.5949 1.83203 8.00065C1.83203 11.4064 4.59294 14.1673 7.9987 14.1673C11.4044 14.1673 14.1654 11.4064 14.1654 8.00065C14.1654 4.5949 11.4044 1.83398 7.9987 1.83398Z"
            fill="#E54545"
          />
        </g>
        <defs>
          <clipPath id="clip0_2509_22424">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p>Ошибка!{errorText}</p>
    </div>
  );
};

export default ErrorNotification;
