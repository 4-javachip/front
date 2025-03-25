'use client';
import MenuModal from '@/components/pages/menu/MenuModal';
import CartButton from '@/components/ui/buttons/CartButton';
import LogoLink from '@/components/ui/buttons/LogoButton';
import MenuButton from '@/components/ui/buttons/MenuButton';
import SearchButton from '@/components/ui/buttons/SearchButton';
import { categoryMenus } from '@/data/dummyDatas';
import React, { useState } from 'react';

export default function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative w-full px-4 py-3 items-center">
        <ul className="flex justify-between">
          <li>
            <MenuButton onClick={() => setIsMenuOpen(true)} />
          </li>

          <li>
            <LogoLink />
          </li>

          <li>
            <ul className="flex justify-end space-x-3 items-center">
              <li>
                <SearchButton />
              </li>
              <li>
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
