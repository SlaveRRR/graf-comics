import { Toaster } from 'sonner';
import styles from './index.module.scss';
const Toast = () => {
  return (
    <Toaster
      position="bottom-right"
      expand={true}
      theme="light"
      visibleToasts={5}
      pauseWhenPageIsHidden={true}
      icons={{
        error: <img src={'/toastErrorIcon.svg'} />,
        info: <img src={'/toastInfoIcon.svg'} />,
        warning: <img src={'/toastWarningIcon.svg'} />,
        success: <img src={'/toastSuccessIcon.svg'} />,
      }}
      toastOptions={{
        duration: 5000,
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
          title: styles['sonner-toast__title'],
        },
      }}
    />
  );
};
export default Toast;
