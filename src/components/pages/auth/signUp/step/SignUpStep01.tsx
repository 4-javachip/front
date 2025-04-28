import SignUpEmailInput from '../SignUpEmailInput';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import EmailVerifyInput from '../EmailVerifyInput';

export default function SignUpStep01({
  handleChange,
  errorMessages,
  inputValues = {} as SignUpStoreStateType,
}: {
  step: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: Partial<SignUpStoreStateType>;
  inputValues: SignUpStoreStateType;
}) {
  return (
    <>
      <SignUpEmailInput
        onChange={handleChange}
        errorMessages={errorMessages}
        inputValues={inputValues}
      />
      <EmailVerifyInput
        handleChange={handleChange}
        inputValues={inputValues}
        purpose="sign_up"
      />
    </>
  );
}
