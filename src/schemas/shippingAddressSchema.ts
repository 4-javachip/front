import { z } from 'zod';

export const shippingAddressSchema = z.object({
  addressNickname: z.string().min(1, '주소별칭을 입력해주세요.'),
  receiverName: z.string().min(1, '받는 분을 입력해주세요.'),
  zipCode: z.string().min(1, '우편번호를 입력해주세요.'),
  defaultAddress: z.string().min(1, '기본주소를 입력해주세요.'),
  detailedAddress: z.string().min(1, '상세주소를 입력해주세요.'),
  phoneNumber: z
    .string()
    .regex(/^010-\d{4}-\d{4}$/, '유효한 전화번호 형식이 아닙니다.'),
  secondPhoneNumber: z.string().optional(),
  shippingNote: z.string().min(1, '배송 메모를 선택해주세요.'),
  isDefault: z.boolean(),
});
