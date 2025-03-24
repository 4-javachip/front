import PageNavBar from './PageNavBar';
import HeaderTop from './HeaderTop';

function Header() {
  return (
    <header className="w-full bg-white shadow-md z-50">
      <HeaderTop />
      <PageNavBar />
    </header>
  );
}

export default Header;
