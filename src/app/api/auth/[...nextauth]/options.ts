import prisma from '@/services/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import type { DefaultSession, DefaultUser, NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import VkProvider from 'next-auth/providers/vk';
import YandexProvider from 'next-auth/providers/yandex';
import { v4 as uuid } from 'uuid';

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
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_SECRET,
      profile(profile, tokens) {
        console.log(profile);
        const [user] = profile?.response;
        return {
          id: uuid(),
          name: [user.first_name, user.last_name].filter(Boolean).join(' '),
          email: user.email ?? '',
          avatar: user.photo_100,
          emailVerified: true,
          role: 'BASIC',
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile, tokens) {
        console.log(profile);
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
        console.log(profile);
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
        const { login, password, authKey } = credentials as {
          login: string;
          password: string;
          authKey: 'email' | 'name';
        };

        console.log(credentials);

        if (credentials !== undefined) {
          const user = await prisma.user.findFirst({ where: { [authKey]: login } });

          if (!user) {
            throw new Error('Invalid data!');
          }
          const isPasswordMatched = await bcrypt.compare(password, user.password);

          if (!isPasswordMatched) {
            throw new Error('Invalid password!');
          }
          if (!user.emailVerified) {
            throw new Error('Email is not verified!');
          }
          return user as any;
        }
      },
    }),
  ],
  events: {
    linkAccount: async ({ user, account, profile }) => {
      console.log(user, account, profile);
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: true,
        },
      });

      return;
    },
  },
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
