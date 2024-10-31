import { api } from '@/api';

interface IUser {
  email: string;
  password: string;
  name: string;
}

class AuthService {
  async signup(user: IUser) {
    return await api.post('/signup', user);
  }
}
export const authService = new AuthService();
