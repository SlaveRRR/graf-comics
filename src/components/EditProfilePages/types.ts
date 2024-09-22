//Page 1
export interface Page1Props {
  data: {
    username: string;
    about: string;
    user_sex: string;
    birth_date: string;
    residence_name: string;
    email: string;
    hide_subscribes: 'yes' | null;
    private_profile: 'yes' | null;
  };
}

export interface Page1EditProfileFormData {
  username: string;
  about: string;
  user_sex: string;
  birth_date: string;
  residence_name: string;
  email: string;
  hide_subscribes: 'yes' | null;
  private_profile: 'yes' | null;
}
//Page 2
export interface Page2Props {
  data: {
    current_password: string;
  };
}

export interface Page2EditProfileFormData {
  current_password: string;
  new_password: string;
  new_password_repeat: string;
}
//Page 3
export interface Page3Props {
  data: {
    show_mature_content: 'yes' | null;
    night_mode: 'yes' | null;
    show_notifications_subscribes: 'yes' | null;
    show_notifications_comments: 'yes' | null;
    show_notifications_paid_content: 'yes' | null;
    show_notifications_likes: 'yes' | null;
    show_notifications_gifts: 'yes' | null;
    show_notifications_new_posts: 'yes' | null;
    show_notifications_lists_reading: 'yes' | null;
    show_notifications_lists_read: 'yes' | null;
    show_notifications_lists_planned: 'yes' | null;
    show_notifications_lists_liked: 'yes' | null;
    show_notifications_lists_dropped: 'yes' | null;
    email_notifications_updates: 'yes' | null;
    email_notifications_surveys: 'yes' | null;
    email_notifications_reports: 'yes' | null;
  };
}

export interface Page3EditProfileFormData {
  show_mature_content: 'yes' | null;
  night_mode: 'yes' | null;
  show_notifications_subscribes: 'yes' | null;
  show_notifications_comments: 'yes' | null;
  show_notifications_paid_content: 'yes' | null;
  show_notifications_likes: 'yes' | null;
  show_notifications_gifts: 'yes' | null;
  show_notifications_new_posts: 'yes' | null;
  show_notifications_lists_reading: 'yes' | null;
  show_notifications_lists_read: 'yes' | null;
  show_notifications_lists_planned: 'yes' | null;
  show_notifications_lists_liked: 'yes' | null;
  show_notifications_lists_dropped: 'yes' | null;
  email_notifications_updates: 'yes' | null;
  email_notifications_surveys: 'yes' | null;
  email_notifications_reports: 'yes' | null;
}
