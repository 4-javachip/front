// 'use server';
// import { options } from '@/app/api/auth/[...nextauth]/options';
// import { UserAgreementType } from '@/types/RequestDataTypes';
// import { CommonResponseType } from '@/types/ResponseDataTypes';
// import { getServerSession } from 'next-auth';
// const session = await getServerSession(options);
// const token = (await session?.user.accessToken) || session?.user.refreshToken;

// //배송지 동의 & 비동의
// export const userAgreement = async (userAgreement: UserAgreementType) => {
//   console.log('배송지 정보 수집 및 이용 동의 요청:', userAgreement);
//   const res = await fetch(`${process.env.BASE_API_URL}/api/v1/user-agreement`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify(userAgreement),
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || '배송지 정보 수집 및 이용 동의 실패');
//   }

//   const data = (await res.json()) as CommonResponseType<UserAgreementType>;

//   return data.result;
// };

// //배송지 약관 내용 조회
// export const getShippingAddressAgreement = async () => {
//   console.log('배송지 정보 수집 및 이용 동의 조회 요청');
//   const res = await fetch(
//     `${process.env.BASE_API_URL}/api/v1/agreement/shipping-address`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//     }
//   );

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(
//       errorData.message || '배송지 정보 수집 및 이용 동의 조회 실패'
//     );
//   }

//   const data = (await res.json()) as CommonResponseType<UserAgreementType>;

//   return data.result;
// };

// //유저 배송지
// export const getUserShippingAddressAgreement = async () => {
//   console.log('배송지 정보 수집 및 이용 동의 조회 요청');
//   const res = await fetch(
//     `${process.env.BASE_API_URL}/api/v1/user-agreemnet/shipping-address`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//     }
//   );

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(
//       errorData.message || '배송지 정보 수집 및 이용 동의 조회 실패'
//     );
//   }

//   const data = (await res.json()) as CommonResponseType<UserAgreementType>;

//   return data.result;
// };
