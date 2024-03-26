import { Binary } from 'mongodb';

enum Gender {
  NONE = 'NONE',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

enum Role {
  BASIC = 'BASIC',
  AUTHOR = 'AUTHOR',
  ADMIN = 'ADMIN',
}

interface IComics {
  id: string;
  title: string;
  description: string;
  status: string;
  covers: Binary[];
  banner: Binary;
  genres: string[];
  focus: string[];
  labels: string[];
  age: String[];
  authorId: string;
  toms: ITom[];
}

interface ITom {
  id: string;
  name: string;
  chapters: IChapter[];
  comicsId: string;
}

interface IChapter {
  id: string;
  name: string;
  tomId: string;
  images: Binary[];
}

interface IComment {
  id: string;
  text: string;
  replyId?: string;
  likes: number;
  createdAt: string;
  userId: string;
}

export interface IUser {
  id: string;
  avatar: string;
  email: string;
  name: string;
  password: string;
  role: Role;
  link?: string;
  gender: Gender;
  emailVerified: string;
  subscribers: number;
  about: string;
  closedProfile: boolean;
  closedSubscribers: boolean;
  comics: IComics[];
  comments: IComment[];
}
