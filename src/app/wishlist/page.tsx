import { getWishProducts } from '@/actions/wishlist-service';
import { get } from 'http';
import React from 'react';

export default async function WishListPage() {
  const wishlistproducts = await getWishProducts();

  return <div>찜 목록 페이지 </div>;
}
