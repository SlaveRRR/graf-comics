import { Button } from '@/components/UI';
import { FC, useState } from 'react';
import { EmailIcon, EmailShareButton, TelegramIcon, TelegramShareButton, VKIcon, VKShareButton } from 'react-share';
import styles from './index.module.scss';
import { ShareUIProps } from './types';

export const ShareUI: FC<ShareUIProps> = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div className={styles['share-container']}>
      <Button mixClass={[styles['copy-button']]} onClick={handleCopy}>
        <h2 className={styles['title']}>Поделиться в соцсетях</h2>
        <svg
          width={24}
          height={24}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 105.02 122.88"
        >
          <g>
            <path d="M5.32,14.64h20.51V5.32v0h0.01c0-1.47,0.6-2.8,1.56-3.76c0.95-0.95,2.28-1.55,3.75-1.55V0h0h39.61h1.22l0.88,0.88 l31.29,31.41l0.87,2.09v69.2v0h-0.01c0,1.47-0.59,2.8-1.55,3.76h-0.01c-0.95,0.96-2.28,1.55-3.75,1.55v0.01h0H79.19v8.65v0h-0.01 c0,1.47-0.59,2.8-1.55,3.76h-0.01c-0.96,0.95-2.28,1.55-3.75,1.55v0.01h0H5.32h0v-0.01c-1.47,0-2.8-0.6-3.76-1.56 c-0.95-0.96-1.55-2.28-1.55-3.75H0v0V19.97v0h0.01c0-1.47,0.6-2.8,1.56-3.76c0.95-0.95,2.28-1.55,3.75-1.55L5.32,14.64L5.32,14.64 L5.32,14.64z M31.76,14.64h13.17h1.22l0.88,0.88l31.29,31.41l0.87,2.09v53.95h19.89V36.24H74.73h0v0c-1.78,0-3.39-0.74-4.56-1.94 c-1.17-1.19-1.9-2.84-1.9-4.65h0v0V5.94H31.76V14.64L31.76,14.64z M68.39,2.97h2.37l31.29,31.41v1.74H74.73 c-3.49,0-6.35-2.92-6.35-6.48V2.97L68.39,2.97z M73.26,50.88H48.91h0v0c-1.78,0-3.39-0.74-4.56-1.94c-1.17-1.19-1.9-2.84-1.9-4.65 h0v0V20.58H25.83H5.94v96.36h67.32v-8.04v-2.97V50.88L73.26,50.88z" />
          </g>
        </svg>
        {copied && <span className={styles['copied-tooltip']}>Скопировано!</span>}
      </Button>

      <div className={styles['share-buttons']}>
        <TelegramShareButton url={url}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>

        <VKShareButton url={url}>
          <VKIcon size={40} round />
        </VKShareButton>

        <EmailShareButton url={url}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
    </div>
  );
};
