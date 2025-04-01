import { DropDownOption } from '@/types/initialDataTypes';

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
