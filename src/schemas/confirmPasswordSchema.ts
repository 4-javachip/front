import { z } from 'zod';

export const confirmPasswordSchema = z
  .object({
    password: z
      .string()
      .min(10, '비밀번호는 10자 이상이어야 합니다.')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        '비밀번호는 영문과 숫자를 포함해야 합니다.'
      )
      .regex(/[!@#$%^&*]/, '비밀번호는 특수문자를 포함해야 합니다.'),
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력하세요.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });
