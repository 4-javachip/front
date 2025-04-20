import { options } from '@/app/api/auth/[...nextauth]/options';
import { OrderItemDataType, OrderListDataType } from '@/types/OrderDataType';
import {
  PaymentSuccessPayload,
  PaymentSuccessReturnType,
} from '@/types/PaymentDataType';
import { CommonResponseType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';

//주문내역 생성
// export const orderListData = async (orderPayload: RequestOrderDataType[]) => {
//   const session = await getServerSession(options);
//   const token = session?.user.accessToken || session?.user.refreshToken;
//   console.log('리프레쉬 토큰 ', session?.user.refreshToken);
//   console.log('토큰 ', token);
//   const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order/list`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify(orderPayload),
//   });
//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || '주문내역목록 조회 실패');
//   }
//   const data = (await res.json()) as CommonResponseType<OrderListDataType[]>;
//   return data.result;
// };

//결제 성공 시 주문내역 생성 api
export const OrderListData = async (
  PaymentSuccessData: PaymentSuccessPayload
) => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(PaymentSuccessData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '주문내역목록 조회 실패');
  }
  const data =
    (await res.json()) as CommonResponseType<PaymentSuccessReturnType>;

  return data.result;
};

//주문 상품 조회
export const getOrderItem = async () => {
  const session = await getServerSession(options);
  const token = session?.user.accessToken || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '주문상품 조회 실패');
  }

  const data = (await res.json()) as CommonResponseType<OrderItemDataType[]>;
  return data.result;
};

/// 주문내역 목록 조회
export const getOrderList = async (): Promise<OrderListDataType[]> => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/order/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    // next: { tags: ['getorderList'] },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '주문내역목록 조회 실패');
  }

  const data = (await res.json()) as CommonResponseType<OrderListDataType[]>;
  return data.result;
};

//주문 내역 상세 조회
export const getOrderDetailList = async (orderListUuid: string) => {
  const session = await getServerSession(options);
  const token = (await session?.user.accessToken) || session?.user.refreshToken;
  console.log('리프레쉬 토큰 ', session?.user.refreshToken);
  console.log('토큰 ', token);
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/order/detail/list/${orderListUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || '주문내역상세 조회 실패');
  }

  const data = (await res.json()) as CommonResponseType<OrderListDataType[]>;
  return data.result;
};
