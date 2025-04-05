import { IComics } from '@/store/comics/types';

export interface ComicsPreviewProps {
  comics?: IComics;
}

interface User {
  id: string;
  name: string;
  profileAvatar: string | null;
}

interface Reply {
  id: string;
  text: string;
  replyId: string | null;
  reply: string | null;
  replies: Reply[];
  likes: number;
  createdAt: string;
  User: User;
  userId: string;
}

export interface Comment {
  id: string;
  text: string;
  replyId: string | null;
  reply: string | null;
  replies: Reply[];
  likes: number;
  createdAt: string;
  User: User;
  userId: string;
}
