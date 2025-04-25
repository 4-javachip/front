import { reissueUserToken } from '@/actions/auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import QrSignInTrigger from '@/components/pages/auth/signIn/QrSignInTrigger';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;
  const token = params.token;
  if (token != process.env.QR_SIGNIN_KEY)
    return (
      <NotFoundLayout
        message="잘못된 접근입니다."
        linkText="홈으로"
        linkHref="/"
      />
    );
  const session = await getServerSession(options);
  console.log(session);
  if (session) redirect('/');

  // const res = await reissueUserToken();
  // console.log(res);

  return (
    <>
      <QrSignInTrigger />
    </>
  );
}
