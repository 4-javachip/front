import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <ul className="flex justify-around p-3 text-gray-700">
        <li>
          <Link href="/">
            <span className="hover:text-green-600">메인</span>
          </Link>
        </li>
        <li>
          <Link href="/best">
            <span className="hover:text-green-600">베스트</span>
          </Link>
        </li>
        <li>
          <Link href="/event">
            <span className="hover:text-green-600">기획전</span>
          </Link>
        </li>
        <li>
          <Link href="/mypage">
            <span className="hover:text-green-600">마이페이지</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
