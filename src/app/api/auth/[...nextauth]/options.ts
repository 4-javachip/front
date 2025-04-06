import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import GoogleProvider from 'next-auth/providers/google';
import { commonResponseType, signInDataType } from '@/types/ResponseDataTypes';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentilas',
      credentials: {
        email: { labael: 'Email', type: 'text' },
        password: { labael: 'Password', type: 'password' },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        console.log('credentials', credentials);
        try {
          const response = await fetch(
            `${process.env.BASE_API_URL}/api/v1/auth/sign-in`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const user =
            (await response.json()) as commonResponseType<signInDataType>;
          console.log('user', user);
          return user.result;
        } catch (error) {
          console.error('error', error);
        }
        // 회원로그인 api 호출
        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: '/auth/sign-in',
    error: '/error',
  },
};
