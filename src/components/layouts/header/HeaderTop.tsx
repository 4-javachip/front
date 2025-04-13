'use client';
import MenuSideBar from '@/components/pages/menu/MenuSideBar';
import CartButton from '@/components/ui/buttons/CartButton';
import LogoButton from '@/components/ui/buttons/LogoButton';
import MenuButton from '@/components/ui/buttons/MenuButton';
import SearchButton from '@/components/ui/buttons/SearchButton';
import React, { useEffect, useState } from 'react';
import { CommonLayout } from '../CommonLayout';
import { getAllCategories } from '@/actions/MenuCategory-service';
import { CategoryMenuType } from '@/types/ResponseDataTypes';
import { useSideBarContext } from '@/context/SideBarContext';

export default function HeaderTop() {
  const { setIsOpen } = useSideBarContext();
  const [categoryMenus, setCategoryMenus] = useState<CategoryMenuType[]>([]);

  useEffect(() => {
    // getAllCategories()
    //   .then((data) => {
    //     setCategoryMenus(data);
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.error('카테고리 불러오기 실패:', err);
    //   });
  }, []);

  return (
    <>
      <CommonLayout.CommonHeader>
        <ul className="flex justify-between ">
          <li className="py-3 px-4.5">
            <MenuButton onClick={() => setIsOpen(true)} />
          </li>

          <li>
            <LogoButton />
          </li>
          <li>
            <ul className="flex justify-end items-center py-3">
              <li>
                <SearchButton />
              </li>
              <li className="pr-4.5 pl-2.5">
                <CartButton cartCount={5} />
              </li>
            </ul>
          </li>
        </ul>
      </CommonLayout.CommonHeader>

      <MenuSideBar categories={categoryMenus} />
    </>
  );
}
