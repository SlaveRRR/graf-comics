import { SiteSettingsFormSchema } from '../types';

export const defaultSettings: SiteSettingsFormSchema = {
  hideMatureContent: true,
  darkMode: true,
  hideNotificationsSubscribes: true,
  hideNotificationsComments: true,
  hideNotificationsPaidContent: true,
  hideNotificationsLikes: true,
  hideNotificationsGifts: true,
  hideNotificationsNewPosts: true,
  showNotificationsListsReading: true,
  showNotificationsListsRead: true,
  showNotificationsListsPlanned: true,
  showNotificationsListsLiked: true,
  showNotificationsListsDropped: true,
  emailNotificationsUpdates: true,
  emailNotificationsSurveys: true,
  emailNotificationsReports: true,
};
