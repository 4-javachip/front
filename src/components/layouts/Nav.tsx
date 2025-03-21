import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-full bg-white p-0 m-0 font-inter">
      <ul className="flex  text-gray-700 p-0 m-0 text-sm">
        <li className=" py-[19px] w-[25%] text-center font-semibold">
          <Link href="/">
            <span className="hover:text-green-600  ">메인</span>
          </Link>
        </li>
        <li className="py-[19px] w-[25%] text-center font-semibold">
          <Link href="/event">
            <span className="hover:text-green-600">기획전</span>
          </Link>
        </li>
        <li className="py-[19px] w-[25%] text-center font-semibold">
          <Link href="/best">
            <span className="hover:text-green-600 ">베스트</span>
          </Link>
        </li>

        <li className="py-[19px] w-[25%] text-center font-semibold ">
          <Link href="/mypage">
            <span className="hover:text-green-600">마이페이지</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
