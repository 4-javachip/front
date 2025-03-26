import { ProductCategoryType } from '@/types/ResponseDataTypes';
import CategoryCarousel from './CategoryCarousel';
import CategoryOptionCarousel from './CategoryOptionCarousel';

const productCategories: ProductCategoryType[] = [
  {
    id: 1,
    name: '텀블러',
    subCategory: [
      { id: 1, name: '플라스틱 텀블러' },
      { id: 2, name: '스테인리스 텀블러' },
    ],
  },
  {
    id: 2,
    name: '머그컵',
    subCategory: [
      { id: 1, name: '머그' },
      { id: 2, name: '글라스' },
      { id: 3, name: '리유저블' },
    ],
  },
  {
    id: 3,
    name: '라이프스타일',
    subCategory: [
      { id: 1, name: '3월 신규코어' },
      { id: 2, name: '플라워 마켓' },
      { id: 3, name: '러브 켄처' },
    ],
  },
  {
    id: 4,
    name: '커피 용품',
    subCategory: [
      { id: 1, name: '드리퍼' },
      { id: 2, name: '서버' },
      { id: 3, name: '커피 필터' },
    ],
  },
  {
    id: 5,
    name: '티 용품',
    subCategory: [
      { id: 1, name: '티팟' },
      { id: 2, name: '티 인퓨저' },
      { id: 3, name: '티 스트레이너' },
    ],
  },
  {
    id: 6,
    name: '음료 & 시럽',
    subCategory: [
      { id: 1, name: '원두' },
      { id: 2, name: '캡슐 커피' },
      { id: 3, name: '시럽 & 소스' },
    ],
  },
  {
    id: 7,
    name: '주방용품',
    subCategory: [
      { id: 1, name: '보틀' },
      { id: 2, name: '컵 & 접시' },
      { id: 3, name: '트레이' },
    ],
  },
  {
    id: 8,
    name: '가전제품',
    subCategory: [
      { id: 1, name: '커피 머신' },
      { id: 2, name: '그라인더' },
      { id: 3, name: '우유 거품기' },
    ],
  },
  {
    id: 9,
    name: '사무 & 문구',
    subCategory: [
      { id: 1, name: '다이어리' },
      { id: 2, name: '펜' },
      { id: 3, name: '노트' },
    ],
  },
  {
    id: 10,
    name: '패션 & 액세서리',
    subCategory: [
      { id: 1, name: '에코백' },
      { id: 2, name: '텀블러 파우치' },
      { id: 3, name: '키링' },
    ],
  },
];

interface seasonType {
  name: string;
  seasonId: number;
}

const seasonList: seasonType[] = [
  { name: '3월 신규코어', seasonId: 1 },
  { name: '플라워 마켓', seasonId: 2 },
  { name: '러브 켄처', seasonId: 3 },
  { name: '시즌4', seasonId: 4 },
  { name: '시즌5', seasonId: 5 },
  { name: '시즌6', seasonId: 6 },
];

export default function ProductFilterList() {
  return (
    <>
      <CategoryCarousel categories={productCategories} />
      <CategoryOptionCarousel
        items={seasonList.map(({ seasonId, name }) => ({ id: seasonId, name }))}
        title="시즌"
      />
    </>
  );
}
