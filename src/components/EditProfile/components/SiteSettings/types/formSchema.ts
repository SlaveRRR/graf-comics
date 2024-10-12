export interface SiteSettingsFormSchema {
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
}
