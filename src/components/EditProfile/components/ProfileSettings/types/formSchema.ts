export interface ProfileSettingsFormSchema {
  username: string;
  about: string;
  gender: string;
  birthDate: string;
  residenceName: string;
  email: string;
  hideSubscribes: 'yes' | null;
  privateProfile: 'yes' | null;
}
