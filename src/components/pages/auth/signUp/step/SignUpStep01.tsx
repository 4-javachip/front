import SignUpEmailInput from '../SignUpEmailInput';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import SignUpEmailVerify from '../SignUpEmailVerify';

export default function SignUpStep01({
  step,
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
      <SignUpEmailVerify
        handleChange={handleChange}
        inputValues={inputValues}
      />
    </>
  );
}
