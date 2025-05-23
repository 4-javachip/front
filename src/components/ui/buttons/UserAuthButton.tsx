import { options } from '@/app/api/auth/[...nextauth]/options';
import LogOutButton from '@/components/pages/mypage/LogOutButton';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function UserAuthButton() {
  const session = await getServerSession(options);
  const isAuth = !!session?.user as boolean;

  return (
    <div>
      {isAuth ? (
        <LogOutButton />
      ) : (
        <Link
          href="/auth/sign-in"
          className="w-8 h-8 flex justify-center items-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H13M8 15L13 10M13 10L8 5M13 10H1"
              stroke="#666767"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
