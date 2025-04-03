export interface SignUpStoreStateType {
  emailId: string;
  emailDomain: string;
  password: string;
  confirmPassword: string;
  nickname?: string;
  name: string;
  year: string;
  month: string;
  date: string;
  phoneNumber: string;
  gender: string;
}

export interface SignUpStepType {
  stepId: number;
  isEnable: boolean;
  item: React.FC<{
    step: number;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessages: Partial<SignUpStoreStateType>;
    inputValues?: SignUpStoreStateType;
  }>;
}
