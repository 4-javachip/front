'use client';

import NotFoundLayout from '@/components/layouts/NotFoundLayout';

export default function errorPage({ error }: { error: Error }) {
  return (
    <>
      <NotFoundLayout
        message="알 수 없는 오류가 발생했습니다."
        linkText="홈으로"
        linkHref="/"
      />
    </>
  );
}
