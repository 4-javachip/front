import Image from 'next/image';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import CartIcon from '@/components/ui/icons/CartIcon';
import MenuIcon from '@/components/ui/icons/MenuIcon';
// import IconButton from '@/components/ui/buttons/IconButton'; // ✅ 경로 수정
import Nav from './Nav';

const Header = () => {
  const cartCount = 5;
  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="relative w-full px-4  py-3 flex items-center justify-between">
        {/* 왼쪽 - 메뉴 아이콘 */}
        <div className="flex items-center">
          <MenuIcon />
        </div>

        {/* 로고 중앙 정렬 */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/logo.png"
            alt="Starbucks Logo"
            width={40}
            height={40}
          />
        </div>

        {/* 오른쪽 - 검색 & 장바구니 */}
        <div className="flex items-center space-x-3">
          <SearchIcon />

          <CartIcon size={32} cartCount={cartCount} />
        </div>
      </div>

      {/* 네비게이션 바 */}
      <Nav />
    </header>
  );
};

export default Header;
