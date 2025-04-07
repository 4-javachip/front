'use client';
import { checkEmailDuplicate } from '@/actions/auth';
import CommonButton from '@/components/ui/buttons/CommonButton';
import ErrorAlertModal from '@/components/ui/ErrorAlertModal';
import CommonInput from '@/components/ui/inputs/CommonInput';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { useRef, useState } from 'react';

export default function SignUpEmailVerify({
  handleChange,
  inputValues,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValues: SignUpStoreStateType;
}) {
  const [remainingTime, setRemainingTime] = useState<number>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorMessage, setModalErrorMessage] = useState('');

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const startTimer = () => {
    setRemainingTime(300);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (!prev || prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendEmailVerification = async (): Promise<boolean> => {
    const email = `${inputValues.emailId}@${inputValues.emailDomain}`;
    const isDuplicated = await checkEmailDuplicate({ email });
    console.log(isDuplicated);

    if (isDuplicated.result) {
      setModalErrorMessage('이미 사용 중인 이메일입니다.');
      setErrorModalOpen(true);
      setRemainingTime(0);
      return false;
    }
    // const res = await sendEmailVerificationAction({ email });
    // if (res) {
    //   startTimer();
    // }
    // console.log(res);
    startTimer();
    return true;
  };

  return (
    <>
      <ErrorAlertModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        errorMessage={modalErrorMessage}
      />
      {!remainingTime || remainingTime === 0 ? (
        <CommonButton onClick={handleSendEmailVerification} isEnabled={true}>
          인증 요청
        </CommonButton>
      ) : (
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
              {formatTime(remainingTime)}
            </span>
          </div>
          <ul className="text-lightGray-6 text-sm mt-5">
            <li>
              • 인증 번호 메일이 오지 않을 시, 스팸 메일함을 확인해 주세요.
            </li>
            <li className="ml-2 mt-3">
              <button
                onClick={handleSendEmailVerification}
                type="button"
                className="text-green text-sm underline cursor-pointer"
              >
                인증번호 다시 요청
              </button>
            </li>
          </ul>
        </li>
      )}
    </>
  );
}
