import type { NextAuthOptions, DefaultSession, DefaultUser } from 'next-auth';
import { Role } from '@prisma/client';
import prisma from '@/services/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import YandexProvider from 'next-auth/providers/yandex';
import VkProvider from 'next-auth/providers/vk';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';

import { type DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & {
      role: Role;
      id: string;
    };
  }
  interface User extends DefaultUser {
    role: Role;
    id: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: Role;
    id: string;
  }
}

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // не добавляется почта, с новой версией next-auth это пофиксили
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_SECRET,
      profile(profile, tokens) {
        return {
          id: profile.id,
          name: [profile.first_name, profile.last_name].filter(Boolean).join(' '),
          email: profile.email ?? '',
          avatar: profile.photo_100,
          emailVerified: true,
          role: 'BASIC',
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile, tokens) {
        return {
          id: profile.sub,
          role: 'BASIC',
          email: profile.email,
          name: profile.name,
          emailVerified: true,
          avatar: profile.picture,
        };
      },
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_SECRET,
      profile(profile, tokens) {
        return {
          id: profile.id,
          role: 'BASIC',
          email: profile.emails[0],
          name: profile.display_name,
          emailVerified: true,
          avatar: profile.is_avatar_empty
            ? ''
            : `https://avatars.yandex.net/get-yapic/${profile.default_avatar_id}/islands-34`,
        };
      },
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log(credentials, 'credentials ');
        if (credentials !== undefined) {
          const user = await prisma.user.findUnique({ where: { email: email } });
          console.log(user);
          if (!user) {
            throw new Error('Invalid  email!');
          }
          const isPasswordMatched = await bcrypt.compare(password, user.password);

          if (!isPasswordMatched) {
            throw new Error('Invalid password!');
          }
          return user as any;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
