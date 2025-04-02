import { z } from 'zod';

export const signUpSchema = z
  .object({
    emailId: z
      .string()
      .min(1, '이메일 아이디를 입력하세요.')
      .regex(/[a-zA-Z0-9]/, '유효한 이메일 아이디 형식이 아닙니다.'),
    emailDomain: z
      .string()
      .min(1, '유효한 이메일 도메인 형식이 아닙니다.')
      .regex(
        /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
        '유효한 이메일 도메인 형식이 아닙니다.'
      ),
    password: z
      .string()
      .min(10, '비밀번호는 10자 이상이어야 합니다.')
      .regex(/[a-zA-Z0-9]/, '비밀번호는 영문과 숫자를 포함해야 합니다.')
      .regex(/[!@#$%^&*]/, '비밀번호는 특수문자를 포함해야 합니다.'),
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력하세요.'),
    nickname: z
      .string()
      .min(2, '닉네임은 2자 이상이어야 합니다.')
      .optional()
      .or(z.literal('')),
    name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
    year: z.string(),
    month: z.string(),
    date: z.string(),
    phoneNumber: z
      .string()
      .regex(/^\d{3}-\d{3,4}-\d{4}$/, '유효한 전화번호 형식이 아닙니다.'),
    gender: z.enum(['남성', '여성']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })
  .refine(
    (data) => {
      const { year, month, date } = data;
      const isYearValid = year.length === 4;
      const isMonthValid = parseInt(month) >= 1 && parseInt(month) <= 12;
      const isDateValid = parseInt(date) >= 1 && parseInt(date) <= 31;
      return isYearValid && isMonthValid && isDateValid;
    },
    {
      message: '유효한 생년월일을 입력해 주세요',
      path: ['year'],
    }
  );
