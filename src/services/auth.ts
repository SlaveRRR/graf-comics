import { api } from '@/api';

interface IUser {
  email: string;
  password: string;
  name: string;
}

class AuthService {
  async signup(user: IUser) {
    const { data, status, statusText } = await api.post('/signup', user);
    return data;
  }
}
export const authService = new AuthService();
