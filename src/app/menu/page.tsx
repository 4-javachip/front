'use client';

import { useEffect } from 'react';
import CategoryMenuList from '@/components/pages/menu/MenuCategoryList';
import { categoryMenus } from '@/data/dummyDatas';
import MenuHeader from '@/components/pages/menu/MenuHeader';
import MenuFooter from '@/components/pages/menu/MenuFooter';
import Header from '@/components/layouts/Header';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-white">
      <MenuHeader />
      <CategoryMenuList categories={categoryMenus} />
      <MenuFooter />
    </main>
  );
}
