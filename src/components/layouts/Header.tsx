import Image from 'next/image';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import CartIcon from '@/components/ui/icons/CartIcon';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import IconButton from '@/components/ui/IconButton'; // ✅ 경로 수정
import Nav from './Nav';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="relative w-full px-4 py-3 flex justify-between items-center">
        {/* 로고 중앙 정렬 */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/logo.png"
            alt="Starbucks Logo"
            width={40}
            height={40}
          />
        </div>

        {/* 왼쪽 - 빈 공간 (자리 맞추기) */}
        {/* <div className="w-10"></div> */}
        <div className="justify-start">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>

        {/* 오른쪽 - 검색 & 장바구니 */}
        <div className="flex space-x-3">
          <IconButton className="w-6 h-6">
            <SearchIcon />
          </IconButton>
          <IconButton className="w-6 h-6">
            <CartIcon />
          </IconButton>
        </div>
      </div>

      {/* 네비게이션 바 */}
      <Nav />
    </header>
  );
};

export default Header;
