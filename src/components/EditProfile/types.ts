export type BackendData = {
  username: string;
  about: string;
  gender: string;
  birthDate: string;
  residenceName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
};
export type LocalStorageData = {
  hideSubscribes: boolean;
  privateProfile: boolean;
  hideMatureContent: boolean;
  darkMode: boolean;
  hideNotificationsSubscribes: boolean;
  hideNotificationsComments: boolean;
  hideNotificationsPaidContent: boolean;
  hideNotificationsLikes: boolean;
  hideNotificationsGifts: boolean;
  hideNotificationsNewPosts: boolean;
  showNotificationsListsReading: boolean;
  showNotificationsListsRead: boolean;
  showNotificationsListsPlanned: boolean;
  showNotificationsListsLiked: boolean;
  showNotificationsListsDropped: boolean;
  emailNotificationsUpdates: boolean;
  emailNotificationsSurveys: boolean;
  emailNotificationsReports: boolean;
};

export type EditProfileFormSchema = BackendData & LocalStorageData;
