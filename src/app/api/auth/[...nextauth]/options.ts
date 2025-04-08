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
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
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

          if (!user.isSuccess) {
            throw new Error(user.message);
          }

          return user.result;
        } catch (error) {
          console.error('authorize error:', error);
          throw new Error(
            (error as { message?: string })?.message ?? '로그인에 실패했습니다.'
          );
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
    async signIn({ user, account, email, credentials }) {
      // Oauth 로그인
      if (account && account.provider !== 'credentials') {
        console.log('account', account);
        console.log('user', user);
        // try {
        //   const res = await fetch(
        //     `${process.env.BASE_API_URL}/api/v1/auth/oauth/sign-in`,
        //     {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify({
        //         provider: account.provider,
        //         providerId: account.providerAccountId,
        //         providerEmail: account.email,
        //       }),
        //       cache: 'no-cache',
        //     }
        //   );
        //   const data = (await res.json()) as commonResponseType<signInDataType>;
        //   console.log('server data', data);
        //   user.accessToken = data.result.accessToken;
        //   // user.refreshToken = data.result.refreshToken;
        //   user.name = data.result.name;
        //   user.uuid = data.result.uuid;
        //   console.log('kakao', user);
        //   return true;
        // } catch (error) {
        //   console.error('error', error);
        //   return '/auth/sign-up';
        // }
      }
      return true;
    },
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
