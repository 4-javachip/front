'use client';
import MenuModal from '@/components/pages/menu/MenuModal';
import CartButton from '@/components/ui/buttons/CartButton';
import LogoButton from '@/components/ui/buttons/LogoButton';
import MenuButton from '@/components/ui/buttons/MenuButton';
import SearchButton from '@/components/ui/buttons/SearchButton';
import { categoryMenus } from '@/data/dummyDatas';
import React, { useState } from 'react';

export default function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-background z-50   items-center shadow-md">
        <ul className="flex justify-between h-14">
          <li className="py-3 px-4.5">
            <MenuButton onClick={() => setIsMenuOpen(true)} />
          </li>

          <li className="flex items-center  ">
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
      </nav>

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        categories={categoryMenus}
      />
    </>
  );
}
