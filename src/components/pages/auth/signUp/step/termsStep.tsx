import { SignUpStoreStateType } from '@/types/storeDataTypes';
import TermsAgreements from '../TermsAgreements';

export default function termsStep({
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
      <TermsAgreements onChange={handleChange} inputValues={inputValues} />
    </>
  );
}
