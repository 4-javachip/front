import { z } from 'zod';

export const shippingAddressSchema = z.object({
  addressName: z.string().optional(),
  recipientName: z.string().min(1, '받는 분을 입력해주세요.'),
  zipCode: z.string().min(1, '우편번호를 입력해주세요.'),
  baseAddress: z.string().min(1, '기본주소를 입력해주세요.'),
  detailAddress: z.string().min(1, '상세주소를 입력해주세요.'),
  phoneNumber: z
    .string()
    .regex(/^010\d{4}\d{4}$/, '유효한 전화번호 형식이 아닙니다.'),
  secondPhoneNumber: z
    .string()
    .regex(/^010\d{4}\d{4}$/, '유효한 전화번호 형식이 아닙니다.')
    .optional()
    .or(z.literal('')),

  shippingNote: z.string().optional().nullable(),
  defaulted: z.boolean().optional().nullable(),
  // usershippingagreed: z.boolean().refine((val) => val === true, {
  //   message: '배송지 정보 수집 및 이용에 동의해주세요.',
  // }),
});
