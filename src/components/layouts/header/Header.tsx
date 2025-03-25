import HeaderTop from './HeaderTop';
import PageNavBar from './PageNavBar';

function Header() {
  return (
    <header className="w-full bg-white shadow-md z-50">
      <HeaderTop />
      <PageNavBar />
    </header>
  );
}

export default Header;
