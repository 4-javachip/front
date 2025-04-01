import { z } from 'zod';

export const signUpSchema = z
  .object({
    emailId: z
      .string()
      .min(1, '이메일 아이디를 입력하세요.')
      .max(15, '이메일 아이디는 15자 이하여야 합니다.'),
    emailDomain: z
      .string()
      .min(1, '도메인을 입력하세요.')
      .max(15, '도메인은 30자 이하여야 합니다.'),
    password: z
      .string()
      .min(10, '비밀번호는 10자 이상이어야 합니다.')
      .max(20, '비밀번호는 20자 이하여야 합니다.')
      .regex(/[a-zA-Z0-9]/, '비밀번호는 영문과 숫자를 포함해야 합니다.')
      .regex(/[!@#$%^&*]/, '비밀번호는 특수문자를 포함해야 합니다.'),
    confirmPassword: z.string(),
    nickname: z
      .string()
      .min(2, '닉네임은 2자 이상이어야 합니다.')
      .max(20, '닉네임은 10자 이하여야 합니다.'),
    name: z
      .string()
      .min(2, '이름은 2자 이상이어야 합니다.')
      .max(20, '이름은 10자 이하여야 합니다.'),
    birthdate: z.string(),
    phoneNumber: z
      .string()
      .regex(/^\d{3}-\d{3,4}-\d{4}$/, '전화번호 형식이 아닙니다.'),
    gender: z.enum(['남성', '여성']),
  })
  .refine(
    (data) => !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: '비밀번호가 일치하지 않습니다.',
      path: ['confirmPassword'],
    }
  );
