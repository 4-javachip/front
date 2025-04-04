import { SignUpStoreStateType } from '@/types/storeDataTypes';
import CommonInput from '@/components/ui/inputs/CommonInput';
import { verifyEmailCodeAction } from '@/actions/auth';

export default function SignUpStep03({
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
    <div
      className="flex flex-row space-x-5
    border-0 border-b-1 border-lightGray-4"
    >
      <CommonInput
        placeholder="인증번호 6자리"
        type="text"
        name="emailVerificationCode"
        onChange={handleChange}
        maxLength={6}
        className="border-none"
      />
      {/* <CommonButton
        type="button"
        onClick={handleVerifyCode}
        isEnabled={true}
        className="w-[14rem]"
      >
        인증번호 확인
      </CommonButton> */}
      {/* 타이머 */}
      <span className="block py-2.5 px-3 text-lg text-foreground">05:00</span>
    </div>
  );
}
