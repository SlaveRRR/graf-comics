import { FC } from 'react';
import { Toaster } from 'sonner';
import { BookMarkMenu, Loader, ModalAuth } from '../UI';
import styles from './index.module.scss';

const UIContainer: FC = () => {
  return (
    <div className="ui-container">
      <Loader />
      <ModalAuth />
      <BookMarkMenu />
      <Toaster
        position="bottom-right"
        expand={true}
        theme="light"
        visibleToasts={5}
        pauseWhenPageIsHidden={true}
        toastOptions={{
          duration: 2500,
          unstyled: false,
          classNames: {
            toast: styles['sonner-toast'],
            success: styles['sonner-toast__success'],
            error: styles['sonner-toast__error'],
            warning: styles['sonner-toast__warning'],
            cancelButton: styles['sonner-toast__cancel-btn'],
            actionButton: styles['sonner-toast__cancel-btn'],
            description: styles['sonner-toast__description'],
            icon: styles['sonner-toast__icon'],
          },
        }}
      />
    </div>
  );
};

export default UIContainer;
