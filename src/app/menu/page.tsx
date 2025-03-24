'use client';

import { useEffect } from 'react';
import MenuCategoryList from '@/components/pages/menu/MenuCategoryList';
import { categoryMenus } from '@/data/dummyDatas';
import MenuTop from '@/components/pages/menu/MenuTop';
import MenuBannerList from '@/components/pages/menu/MenuBannerList';
import Header from '@/components/layouts/Header';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-white">
      <MenuTop />
      <MenuCategoryList categories={categoryMenus} />
      <MenuBannerList />
    </main>
  );
}
