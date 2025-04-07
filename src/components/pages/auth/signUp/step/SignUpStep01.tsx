import SignUpEmailInput from '../SignUpEmailInput';
import SignUpPasswordInput from '../SignUpPasswordInput';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import CommonButton from '@/components/ui/buttons/CommonButton';
import SignUpEmailVerify from '../SignUpEmailVerify';
import { checkEmailDuplicate } from '@/actions/auth';
import ErrorAlertModal from '@/components/ui/ErrorAlertModal';

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
