import { SiteSettingsFormSchema } from '../types';

export const defaultSettings: SiteSettingsFormSchema = {
  showMatureContent: null,
  darkMode: null,
  showNotificationsSubscribes: null,
  showNotificationsComments: 'yes',
  showNotificationsPaidContent: null,
  showNotificationsLikes: null,
  showNotificationsGifts: 'yes',
  showNotificationsNewPosts: null,
  showNotificationsListsReading: 'yes',
  showNotificationsListsRead: null,
  showNotificationsListsPlanned: null,
  showNotificationsListsLiked: null,
  showNotificationsListsDropped: null,
  emailNotificationsUpdates: 'yes',
  emailNotificationsSurveys: null,
  emailNotificationsReports: null,
};
