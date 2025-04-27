import { getUserInfoData } from '@/actions/auth';
import MyPageMenu from '@/components/pages/mypage/MyPageMenu';
import OrderDeliveryStatus from '@/components/pages/mypage/OrderDeliveryStatus';
import React from 'react';

export default async function MyPagePage() {
  const { data: userData } = await getUserInfoData();
  return (
    <main>
      {userData && (
        <div className="padded pt-10 pb-10 font-bold text-xl border border-b-lightGray-5">
          {userData.name && <p>{userData.name}님, 안녕하세요.</p>}
          <p className="text-sm font-medium text-lightGray-1 pt-1">
            {userData.email}
          </p>
        </div>
      )}
      <OrderDeliveryStatus />
      <MyPageMenu />
    </main>
  );
}
