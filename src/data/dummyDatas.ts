import {
  BannerSlideImageType,
  EventCarouselType,
  ProductlItemType,
} from '@/types/ResponseDataTypes';

export const mainBannerSlideData: BannerSlideImageType[] = [
  {
    id: 1,
    description: 'main banner 1',
    imageUrl: 'https://picsum.photos/id/237/390/330',
  },
  {
    id: 2,
    description: 'main banner 2',
    imageUrl: 'https://dummyimage.com/500',
  },
  {
    id: 3,
    description: 'main banner 3',
    imageUrl: 'https://dummyimage.com/1000',
  },
];

const productList: ProductlItemType[] = [
  {
    id: 1,
    thumbnail: {
      imageUrl: 'https://picsum.photos/id/237/140',
      description: 'desc1',
    },
    label: {
      isBest: true,
      isNew: false,
    },
    name: 'SS 핑크 탱크 텀블러 503ml',
    price: 35000,
    salePrice: 31500,
    discountRate: 10,
  },
  {
    id: 2,
    thumbnail: {
      imageUrl: 'https://picsum.photos/id/237/400',
      description: 'desc2',
    },
    label: {
      isBest: false,
      isNew: true,
    },
    name: '클래식 화이트 머그컵 300ml',
    price: 15000,
    salePrice: 12000,
    discountRate: 20,
  },
  {
    id: 3,
    thumbnail: { imageUrl: 'https://dummyimage.com/140', description: 'desc3' },
    label: {
      isBest: false,
      isNew: false,
    },
    name: '레드 트래블 텀블러 500ml',
    price: 25000,
    salePrice: 25000,
    discountRate: 0,
  },
  {
    id: 4,
    thumbnail: { imageUrl: 'https://dummyimage.com/300', description: 'desc4' },
    label: {
      isBest: true,
      isNew: true,
    },
    name: '블랙 트렌드 텀블러 600ml',
    price: 45000,
    salePrice: 40000,
    discountRate: 11,
  },
];

export const eventCarousels: EventCarouselType[] = [
  {
    eventId: 1,
    title: 'MD FESTA',
    products: productList,
  },
  {
    eventId: 2,
    title: 'Ways of Working',
    products: productList,
  },
  {
    eventId: 3,
    title: 'Flower Market',
    products: productList,
  },
];
