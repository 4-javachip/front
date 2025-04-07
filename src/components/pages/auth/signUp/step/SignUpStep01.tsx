import { SignUpStoreStateType } from '@/types/storeDataTypes';
import TermsAgreements from '../TermsAgreements';

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
      <TermsAgreements />
    </>
  );
}
