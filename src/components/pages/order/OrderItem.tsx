import Image from 'next/image';
import { CartProductType } from '@/types/ResponseDataTypes';
import OrderItemInfo from './OrderItemInfo';
import { dummyCartItems } from '@/data/dummyDatas';

interface Props {
  item: CartProductType;
  isFirst?: boolean;
  isOpen: boolean;
}

export default function OrderItem({ item, isFirst = false, isOpen }: Props) {
  const itemDisplayText =
    !isOpen && isFirst && item.productName
      ? `${item.productName}${
          dummyCartItems.length > 1
            ? ` ...외 ${dummyCartItems.length - 1}건`
            : ''
        } `
      : item.productName;

  const itemName = itemDisplayText.split(' ...')[0];
  const additionalItems = itemDisplayText.split(' ...')[1];
  const truncatedName =
    itemName.length > 17 ? itemName.slice(0, 16) + '...' : itemName;

  return (
    <div className={`flex items-center gap-3 ${isFirst ? '' : 'mt-3'}`}>
      <figure className="w-20 h-20 shrink-0 relative">
        <Image
          src={item.productImageUrl}
          alt={item.productName}
          fill
          className="object-cover rounded-sm"
        />
      </figure>

      <div
        className={`flex flex-col w-full ${
          !isOpen ? 'justify-center items-center h-full' : ''
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-sm font-pretendard font-medium text-foreground">
            {isOpen ? itemName : truncatedName}
          </p>

          {additionalItems && (
            <span className="font-pretendard font-medium text-green text-sm">
              {additionalItems}
            </span>
          )}
        </div>

        {isOpen && <OrderItemInfo item={item} />}
      </div>
    </div>
  );
}
