import {
  getThumbnailDatasByProductUuid,
  getOptionDatasByProductUuid,
} from '@/actions/product-service';
import {
  ProductOptionType,
  ProductThumbnailDataType,
} from '@/types/ProductResponseDataTypes';

import {
  ItemPriceSkeleton,
  ItemThumbSkeleton,
} from '../skeletons/ProductItemSkeleton';

import CartPrice from './CartPrice';
import { CartItemListType } from '@/types/CartDataType';
import CartThumbnail from './CartThumbnail';
import CartItemName from './CartItemName';
import { CommonLayout } from '@/components/layouts/CommonLayout';
// import DeleteButton from '../buttons/DeleteButton';
import DeleteIcon from '../icons/DeleteIcon';
import { Check } from 'lucide-react';
import Checkbox from '../inputs/CheckBox';

export default async function CartItem({
  cartItem,
  name,
  size,
}: {
  cartItem: CartItemListType;
  name: string;
  size: number;
}) {
  let thumbnails = [] as ProductThumbnailDataType[];
  let options = [] as ProductOptionType[];

  try {
    thumbnails = await getThumbnailDatasByProductUuid(cartItem.productUuid);
    options = await getOptionDatasByProductUuid(cartItem.productUuid);
  } catch (error) {
    console.log('데이터 페칭 에러');
  }
  const option = options[0];
  const thumbnail = thumbnails[0];
  return (
    <CommonLayout.SectionInnerPadding>
      <article className="flex items-start gap-4 py-6 border-b border-lightGray-8">
        <div>
          <Checkbox checked={true} />
        </div>
        <div className="shrink-0" style={{ width: size, height: size }}>
          {thumbnails ? (
            <CartThumbnail
              productUuid={cartItem.productUuid}
              thumbnail={thumbnail}
              size={size}
            />
          ) : (
            <ItemThumbSkeleton size={size} />
          )}
        </div>

        <div className="flex flex-col justify-between flex-1 h-full">
          <div className="flex justify-between items-start mb-2">
            <div className="text-base font-semibold text-foreground break-words">
              <CartItemName id={cartItem.productUuid} name={name} />
            </div>
            {/* <DeleteButton
              cartUuid={cartItem.cartUuid}
              onClick={() => {
                console.log('삭제 버튼 클릭됨');
              }}
            /> */}
            <DeleteIcon />
          </div>
          {/* <QuantityControl
            quantity={1}
            onDecrease={() => {}}
            onIncrease={() => {}}
          /> */}

          <div className="flex justify-end mt-4">
            {options ? (
              <CartPrice
                price={option.price}
                salePrice={option.totalPrice}
                discountRate={option.discountRate}
              />
            ) : (
              <ItemPriceSkeleton />
            )}
          </div>
        </div>
      </article>
    </CommonLayout.SectionInnerPadding>
  );
}
