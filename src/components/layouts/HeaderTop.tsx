import Link from 'next/link';
import React from 'react';
import MenuIcon from '../ui/icons/MenuIcon';
import { LogoIcon } from '../ui/icons/LogoIcon';
import SearchIcon from '../ui/icons/SearchIcon';
import CartIcon from '../ui/icons/CartIcon';

export default function HeaderTop() {
  return (
    <nav className="relative w-full px-4 py-3 items-center ">
      <ul className="flex justify-between">
        <li>
          <Link href="/menu">
            <MenuIcon />
          </Link>
        </li>
        <li>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <LogoIcon />
          </Link>
          <h1 className="blind">Starbucks</h1>
        </li>
        <li>
          <ul className="flex justify-end space-x-3 items-center">
            <li>
              <SearchIcon />
            </li>
            <li>
              <CartIcon size={32} cartCount={5} />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
