import SignUpStep01 from '@/components/pages/auth/signUp/step/SignUpStep01';
import SignUpStep02 from '@/components/pages/auth/signUp/step/SignUpStep02';
import {
  DropDownOption,
  SignUpStepType,
  SortType,
} from '@/types/initialDataTypes';
import SignUpStep03 from '@/components/pages/auth/signUp/step/SignUpStep03';
import { SortOptionType } from '@/types/ResponseDataTypes';

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
    messages: ['이메일을', '입력해 주세요.'],
    requiredFields: [
      'emailId',
      'emailDomain',
      'emailVerificationCode',
      'isEmailVerified',
    ],
    item: SignUpStep01,
  },
  {
    stepId: 2,
    isEnable: false,
    messages: ['비밀번호를', '입력해 주세요.'],
    requiredFields: ['password', 'confirmPassword'],
    item: SignUpStep02,
  },
  {
    stepId: 3,
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
    item: SignUpStep03,
  },
];

export const productSortOptions: SortOptionType[] = [
  { label: '신상품순', value: 'new' },
  { label: '추천순', value: 'recommend' },
  { label: '낮은가격순', value: 'price_asc' },
  { label: '높은가격순', value: 'price_desc' },
];

export const reviewSortOptions: SortOptionType[] = [
  { label: '최신순', value: 'latest' },
  { label: '평점낮은순', value: 'rating_asc' },
  { label: '평점높은순', value: 'rating_desc' },
];
