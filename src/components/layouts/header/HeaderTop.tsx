'use client';
import MenuModal from '@/components/pages/menu/MenuModal';
import CartButton from '@/components/ui/buttons/CartButton';
import LogoButton from '@/components/ui/buttons/LogoButton';
import MenuButton from '@/components/ui/buttons/MenuButton';
import SearchButton from '@/components/ui/buttons/SearchButton';
import { categoryMenus } from '@/data/dummyDatas';
import React, { useState } from 'react';
import { CommonLayout } from '../CommonLayout';

export default function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <CommonLayout.CommonHeader>
        <ul className="flex justify-between">
          <li className="py-3 px-4.5">
            <MenuButton onClick={() => setIsMenuOpen(true)} />
          </li>

          <li className="flex items-center ">
            <LogoButton />
          </li>

          <li>
            <ul className="flex justify-end  items-center py-3 ">
              <li className="">
                <SearchButton />
              </li>
              <li className="pr-4.5 pl-2.5">
                <CartButton cartCount={5} />
              </li>
            </ul>
          </li>
        </ul>
      </CommonLayout.CommonHeader>

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        categories={categoryMenus}
      />
    </>
  );
}
