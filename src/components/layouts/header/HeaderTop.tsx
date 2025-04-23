import MenuSideBar from '@/components/pages/menu/MenuSideBar';
import CartButton from '@/components/ui/buttons/CartButton';
import LogoButton from '@/components/ui/buttons/LogoButton';
import MenuButton from '@/components/ui/buttons/MenuButton';
import SearchButton from '@/components/ui/buttons/SearchButton';
import { CommonLayout } from '../CommonLayout';
import UserAuthButton from '@/components/ui/buttons/UserAuthButton';
import SearchModal from '@/components/modals/SearchModal';

export default function HeaderTop() {
  return (
    <>
      <CommonLayout.CommonHeader>
        <ul className="flex justify-between ">
          <li className="py-3 px-4.5">
            <MenuButton />
          </li>
          <li>
            <LogoButton />
          </li>
          <li>
            <ul className="flex justify-end py-3 gap-2">
              <li>
                <SearchButton />
              </li>
              <li>
                <CartButton />
              </li>
              <li className="pr-4.5">
                <UserAuthButton />
              </li>
            </ul>
          </li>
        </ul>
      </CommonLayout.CommonHeader>

      <MenuSideBar />
      <SearchModal />
    </>
  );
}
