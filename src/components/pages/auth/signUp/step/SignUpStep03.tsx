import { SignUpStoreStateType } from '@/types/storeDataTypes';
import CommonInput from '@/components/ui/inputs/CommonInput';

export default function SignUpStep03({
  step,
  handleChange,
  errorMessages,
  inputValues = {} as SignUpStoreStateType,
  remainingTime,
}: {
  step: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: Partial<SignUpStoreStateType>;
  inputValues: SignUpStoreStateType;
  remainingTime?: number | null;
}) {
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <li>
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
        <span className="block py-2.5 px-3 text-lg text-foreground">
          {remainingTime ? formatTime(remainingTime) : '00:00'}
        </span>
      </div>
      <ul className="text-lightGray-6 text-sm mt-5">
        <li>• 인증 번호 메일이 오지 않을 시, 스팸 메일함을 확인해 주세요.</li>
      </ul>
    </li>
  );
}
