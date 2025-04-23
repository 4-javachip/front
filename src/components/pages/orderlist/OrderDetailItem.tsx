import { OrderListDetailDataType } from '@/types/OrderDataType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function OrderDetailItem({
  item,
}: {
  item: OrderListDetailDataType;
}) {
  return (
    <div className="border p-4 rounded-lg flex gap-4 px-6 ">
      <Link
        href={`product/${item.productUuid}`}
        className=" bg-lightGray-4 rounded-sm
cursor-pointer  "
        draggable="false"
      >
        <Image
          src={item.thumbnail}
          alt={item.name}
          width={140}
          height={140}
          className="rounded"
        />
      </Link>
      <div>
        <p className="text-base">{item.name}</p>
        <p className="text-sm text-gray-600">수량: {item.quantity}개</p>
        <p className="text-sm text-gray-600">
          가격: {item.totalPrice?.toLocaleString()}원
        </p>
      </div>
    </div>
  );
}
