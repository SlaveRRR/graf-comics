import { api } from '@/api';
import { z } from 'zod';

// Схема валидации пароля
const passwordSchema = z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
  message: 'Пароль должен содержать 8 символов или более, включая 1 цифру.',
});

interface IUser {
  email: string;
  password: string;
  name: string;
}

class AuthService {
  async signup(user: IUser) {
    try {
      passwordSchema.parse(user.password);

      return await api.post('/signup', user);
    } catch (error) {
      throw new Error(error.errors?.[0]?.message || 'Некорректные данные!');
    }
  }
}

export const authService = new AuthService();
