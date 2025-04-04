import SignUpStep01 from '@/components/pages/auth/signUp/step/SignUpStep01';
import SignUpStep02 from '@/components/pages/auth/signUp/step/SignUpStep02';
import SignUpStep03 from '@/components/pages/auth/signUp/step/SignUpStep03';
import { DropDownOption, SignUpStepType } from '@/types/initialDataTypes';

export const emailDomains: DropDownOption[] = [
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'naver.com', label: 'naver.com' },
  { value: 'daum.net', label: 'daum.net' },
  { value: 'custom', label: '직접 입력' },
];

export const genderOptions: DropDownOption[] = [
  { value: '남성', label: '남성' },
  { value: '여성', label: '여성' },
];

export const signUpStepData: SignUpStepType[] = [
  {
    stepId: 1,
    isEnable: false,
    messages: ['이메일과 비밀번호를', '입력해 주세요.'],
    requiredFields: ['emailId', 'emailDomain', 'password', 'confirmPassword'],
    item: SignUpStep01,
  },
  {
    stepId: 2,
    isEnable: false,
    messages: ['유저 정보를', '입력해 주세요.'],
    requiredFields: [
      'name',
      'nickname',
      'year',
      'month',
      'date',
      'phoneNumber',
      'gender',
    ],
    item: SignUpStep02,
  },
  {
    stepId: 3,
    isEnable: false,
    messages: ['전송된 인증 번호를', '입력해 주세요.'],
    requiredFields: ['emailVerificationCode'],
    item: SignUpStep03,
  },
];
