'use client';
import {
  CartListDataType,
  CartProductItemType,
} from '@/types/ResponseDataTypes';
import QuantityControl from './QuantityControl';
import DeleteButton from '@/components/ui/buttons/DeleteButton';
import Checkbox from '@/components/ui/inputs/CheckBox';
import Image from 'next/image';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import { useEffect, useState } from 'react';
import { getProductItem } from '@/actions/cart-service';

export default function CartItem({ item }: { item: CartListDataType }) {
  const [productData, setProductData] = useState<CartProductItemType>(
    {} as CartProductItemType
  );

  useEffect(() => {
    const getData = async () => {
      const res = await getProductItem(item.productUuid);
      setProductData(res);
    };
    getData();
  }, [item]);

  return (
    <article className="flex items-start gap-3 py-5.5 border-b border-lightGray-8 px-6">
      {/* <CustomCheckBox
        checked={item.checked}
        // onChange={() => onToggleCheck(productOptionListUuid)}
        label={`checkbox-${item.productOptionListUuid}`}
      /> */}
      {productData.name}
      {productData.productUuid}
      <figure>
        {/* <Image
          src={productImageUrl}
          alt={productName}
          width={80}
          height={80}
          className="w-20 h-20 rounded object-cover"
        /> */}
      </figure>
      <section className="flex-1">
        <ul className="flex justify-between items-start mb-2">
          <li className="text-sm font-pretendard font-semibold text-foreground">
            {}
          </li>
          <li>
            {/* <DeleteButton onDelete={() => console.log('delete')} /> */}
          </li>
        </ul>

        <ul className="flex justify-between items-center">
          <li>
            <QuantityControl quantity={item.productQuantity} />
          </li>
          <li className="text-right font-body">
            {/* {cartItem.discountPrice && cartItem.discountPrice > 0 ? (
              <div className="flex flex-col items-end">
                <span className="text-lightGray-7 line-through text-sm">
                  {(productPrice * productQuantity).toLocaleString()}원
                </span>
                <span className="text-foreground font-semibold">
                  {Math.floor(
                    productPrice * productQuantity - discountPrice
                  ).toLocaleString()}
                  원
                </span>
              </div>
            ) : ( */}
            <span className="font-semibold text-foreground">
              {(1000 * item.productQuantity).toLocaleString()}원
            </span>
            {/* )} */}
          </li>
        </ul>
      </section>
    </article>
  );
}
