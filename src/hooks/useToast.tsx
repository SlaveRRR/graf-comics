import { ExternalToast, toast } from 'sonner';

export const toastDefault = (message: string, params?: ExternalToast) => {
  return toast(message, {
    icon: <img src={'/toastDefaultIcon.svg'} />,
    ...params,
  });
};

export const toastAction = (
  message: string,
  callBack: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  duration?: number,
) => {
  return toast(message, {
    duration: duration,
    cancel: {
      label: 'Отмена',
      onClick: callBack,
    },
  });
};
export const toastAchievement = (message: string, params?: ExternalToast) => {
  return toast(message, {
    icon: <img src={'/toastAchievementIcon.svg'} />,
    ...params,
  });
};

export const useToast = () => {
  return {
    toastDefault,
    toastAction,
    toastAchievement,
  };
};
