import Image from 'next/image';
import { CartProductType } from '@/types/ResponseDataTypes';
import OrderItemInfo from './OrderItemInfo';

interface Props {
  item: CartProductType;
  isFirst?: boolean;
}

export default function OrderItem({ item, isFirst = false }: Props) {
  return (
    <div className={`flex items-start gap-3 ${isFirst ? '' : 'mt-3'}`}>
      <figure className="w-16 h-16 shrink-0 relative">
        <Image
          src={item.productImageUrl}
          alt={item.productName}
          fill
          sizes="64px"
          className="object-cover rounded-md"
        />
      </figure>
      <OrderItemInfo item={item} />
    </div>
  );
}
