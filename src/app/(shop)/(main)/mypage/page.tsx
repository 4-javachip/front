import { options } from '@/app/api/auth/[...nextauth]/options';
import MyPageMenu from '@/components/pages/mypage/MyPageMenu';
import OrderDeliveryStatus from '@/components/pages/mypage/OrderDeliveryStatus';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function page() {
  const session = await getServerSession(options);
  return (
    <main>
      {session && (
        <div className="padded pt-10 pb-10 font-bold text-xl border border-b-lightGray-5">
          {session.user.name && <p>{session.user.name}님, 안녕하세요.</p>}
          <p className="text-sm font-medium text-lightGray-1 pt-1">
            {session.user.email}
          </p>
        </div>
      )}
      <OrderDeliveryStatus />
      <MyPageMenu />
    </main>
  );
}
