import React from 'react';
import ProductReviewItem from './ProductReviewItem';
import {
  ProductReviewImageType,
  ProductReviewType,
} from '@/types/ProductResponseDataTypes';

const dummyReviews: ProductReviewType[] = [
  {
    reviewUuid: 'rev-001',
    userUuid: 'user-001',
    productUuid: 'prod-001',
    title: '정말 좋아요!',
    content: '배송도 빠르고 상품도 만족스러워요. 다음에 또 살게요!',
    rating: 5,
  },
  {
    reviewUuid: 'rev-002',
    userUuid: 'user-002',
    productUuid: 'prod-001',
    title: '괜찮은 편이에요',
    content: '가격 대비 성능은 괜찮은 것 같아요. 포장도 깔끔했어요.',
    rating: 4,
  },
];

const dummyReviewImage: ProductReviewImageType[] = [
  {
    id: 1,
    reviewUuid: 'rev-001',
    imageUrl: 'https://dummyimage.com/500',
  },
  {
    id: 2,
    reviewUuid: 'rev-001',
    imageUrl: 'https://dummyimage.com/500',
  },
];

export default function ProductReviewSection() {
  return (
    <section className="padded space-y-4">
      <ProductReviewItem reviewData={dummyReviews[0]} />
      <ProductReviewItem
        reviewData={dummyReviews[1]}
        reviewImage={dummyReviewImage[1]}
      />
    </section>
  );
}
