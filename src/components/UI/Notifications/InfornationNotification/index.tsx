import { FC } from 'react';
import styles from './index.module.scss';
type Props = {
  infoText: String;
};

const InfornmationNotification: FC<Props> = ({ infoText }) => {
  return (
    <div className={styles['notification']}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2509_22360)">
          <path
            d="M8 11.834C8.27613 11.834 8.5 11.6101 8.5 11.334V7.33398C8.5 7.05785 8.27613 6.83398 8 6.83398C7.72387 6.83398 7.5 7.05785 7.5 7.33398V11.334C7.5 11.6101 7.72387 11.834 8 11.834Z"
            fill="#2D283E"
          />
          <path
            d="M7.9987 4.66602C8.3669 4.66602 8.66536 4.9645 8.66536 5.33268C8.66536 5.70087 8.3669 5.99935 7.9987 5.99935C7.6305 5.99935 7.33203 5.70087 7.33203 5.33268C7.33203 4.9645 7.6305 4.66602 7.9987 4.66602Z"
            fill="#2D283E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.832031 8.00065C0.832031 4.04261 4.04066 0.833984 7.9987 0.833984C11.9568 0.833984 15.1654 4.04261 15.1654 8.00065C15.1654 11.9587 11.9568 15.1673 7.9987 15.1673C4.04066 15.1673 0.832031 11.9587 0.832031 8.00065ZM7.9987 1.83398C4.59294 1.83398 1.83203 4.5949 1.83203 8.00065C1.83203 11.4064 4.59294 14.1673 7.9987 14.1673C11.4044 14.1673 14.1654 11.4064 14.1654 8.00065C14.1654 4.5949 11.4044 1.83398 7.9987 1.83398Z"
            fill="#2D283E"
          />
        </g>
        <defs>
          <clipPath id="clip0_2509_22360">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p>{infoText}</p>
    </div>
  );
};

export default InfornmationNotification;
