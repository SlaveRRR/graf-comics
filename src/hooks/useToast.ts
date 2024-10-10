import toastAchievementIcon from '@/assets/toastAchievementIcon';
import toastDefaultIcon from '@/assets/toastDefaultIcon';
import toastErrorIcon from '@/assets/toastErrorIcon';
import toastInfoIcon from '@/assets/toastInfoIcon';
import toastSuccessIcon from '@/assets/toastSuccessIcon';
import toastWarningIcon from '@/assets/toastWarningIcon';
import { toast } from 'sonner';

export const toastDefault = (message: string, duration?: number) => {
  return toast(
    message,
    duration
      ? {
          duration: duration,
          icon: toastDefaultIcon(),
        }
      : {
          icon: toastDefaultIcon(),
        },
  );
};

export const toastDescription = (message: string, description: string, duration?: number) => {
  return toast.message(
    message,
    duration
      ? {
          duration: duration,
          description: description,
          icon: toastDefaultIcon(),
        }
      : {
          description: description,
          icon: toastDefaultIcon(),
        },
  );
};

export const toastSuccess = (message: string, duration?: number) => {
  return toast.success(
    message,
    duration
      ? {
          duration: duration,
          icon: toastSuccessIcon(),
        }
      : {
          icon: toastSuccessIcon(),
        },
  );
};
export const toastInfo = (message: string, duration?: number) => {
  return toast.info(
    message,
    duration
      ? {
          duration: duration,
          icon: toastInfoIcon(),
        }
      : {
          icon: toastInfoIcon(),
        },
  );
};
export const toastWarning = (message: string, duration?: number) => {
  return toast.warning(
    message,
    duration
      ? {
          duration: duration,
          icon: toastWarningIcon(),
        }
      : {
          icon: toastWarningIcon(),
        },
  );
};
export const toastError = (message: string, duration?: number) => {
  return toast.error(
    message,
    duration
      ? {
          duration: duration,
          icon: toastErrorIcon(),
        }
      : {
          icon: toastErrorIcon(),
        },
  );
};
export const toastAction = (
  message: string,
  callBack: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  duration?: number,
) => {
  return toast(
    message,
    duration
      ? {
          duration: duration,
          cancel: {
            label: 'Отмена',
            onClick: callBack,
          },
        }
      : {
          cancel: {
            label: 'Отмена',
            onClick: callBack,
          },
        },
  );
};
export const toastAchievement = (message: string, duration?: number) => {
  return toast(
    message,
    duration
      ? {
          duration: duration,
          icon: toastAchievementIcon(),
        }
      : {
          icon: toastAchievementIcon(),
        },
  );
};

export const useToast = () => {
  return {
    toastDefault,
    toastDescription,
    toastSuccess,
    toastInfo,
    toastWarning,
    toastError,
    toastAction,
    toastAchievement,
  };
};
