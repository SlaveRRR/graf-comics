export interface SiteSettingsFormSchema {
  showMatureContent: 'yes' | null;
  darkMode: 'yes' | null;
  showNotificationsSubscribes: 'yes' | null;
  showNotificationsComments: 'yes' | null;
  showNotificationsPaidContent: 'yes' | null;
  showNotificationsLikes: 'yes' | null;
  showNotificationsGifts: 'yes' | null;
  showNotificationsNewPosts: 'yes' | null;
  showNotificationsListsReading: 'yes' | null;
  showNotificationsListsRead: 'yes' | null;
  showNotificationsListsPlanned: 'yes' | null;
  showNotificationsListsLiked: 'yes' | null;
  showNotificationsListsDropped: 'yes' | null;
  emailNotificationsUpdates: 'yes' | null;
  emailNotificationsSurveys: 'yes' | null;
  emailNotificationsReports: 'yes' | null;
}
