import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.includes('admin')) {
        return token?.role === 'ADMIN';
      }
      return Boolean(token);
    },
  },
});

export const config = { matcher: ['/profile/:path*', '/admin/:path*'] };
