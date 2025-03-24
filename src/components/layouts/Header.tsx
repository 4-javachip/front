import SearchIcon from '@/components/ui/icons/SearchIcon';
import CartIcon from '@/components/ui/icons/CartIcon';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import Nav from './Nav';
import Link from 'next/link';
import { LogoIcon } from '../ui/icons/LogoIcon';

const Header = () => {
  const cartCount = 5;

  return (
    <header className="w-full bg-white shadow-md z-50">
      <nav className="relative w-full px-4 py-3 flex items-center justify-between">
        <ul className="flex">
          <li>
            <Link href="/menu">
              <MenuIcon />
            </Link>
          </li>
        </ul>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <LogoIcon />
        </Link>
        <h1 className="blind">Starbucks</h1>

        <ul className="flex space-x-3">
          <li>
            <SearchIcon />
          </li>
          <li>
            <CartIcon size={32} cartCount={cartCount} />
          </li>
        </ul>
      </nav>

      <Nav />
    </header>
  );
};

export default Header;
