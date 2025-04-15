'use client';
import {
  checkEmailDuplicate,
  sendEmailVerificationAction,
  verifyEmailCodeAction,
} from '@/actions/auth';
import CommonButton from '@/components/ui/buttons/CommonButton';
import ErrorAlertModal from '@/components/ui/ErrorAlertModal';
import CommonInput from '@/components/ui/inputs/CommonInput';
import Loader from '@/components/ui/loader';
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      const email = `${inputValues.emailId}@${inputValues.emailDomain}`;
      const isDuplicated = await checkEmailDuplicate({ email });
      console.log(isDuplicated);

      if (isDuplicated.result) {
        setModalErrorMessage('이미 사용 중인 이메일입니다.');
        setIsLoading(false);
        setErrorModalOpen(true);
        setRemainingTime(0);
        return false;
      }
      const res = await sendEmailVerificationAction({ email });
      if (res) {
        startTimer();
      }
      console.log(res);

      handleChange({
        target: {
          name: 'isEmailSent',
          value: 'true',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    } catch (error) {
      const message =
        (error as { message?: string })?.message ??
        '메일 전송 중 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.';
      setModalErrorMessage(message);
      setErrorModalOpen(true);
      setIsLoading(false);
      return false;
    }
    setIsLoading(false);
    return true;
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    try {
      const email = `${inputValues.emailId}@${inputValues.emailDomain}`;
      const code = inputValues.emailVerificationCode;
      const res = await verifyEmailCodeAction({
        email,
        verificationCode: code,
      });

      if (res && !res.error) {
        handleChange({
          target: {
            name: 'isEmailVerified',
            value: 'true',
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }

      console.log(res);
    } catch (error) {
      const message =
        (error as { message?: string })?.message ??
        '인증 확인 중 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.';
      setModalErrorMessage(message);
      setErrorModalOpen(true);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <>
      <ErrorAlertModal
        open={errorModalOpen}
        onOpenChange={setErrorModalOpen}
        errorMessage={modalErrorMessage}
      />
      {inputValues.isEmailVerified === 'true' ? (
        <CommonButton isEnabled={false}>이메일이 인증되었습니다.</CommonButton>
      ) : (
        <>
          {!remainingTime || remainingTime === 0 ? (
            <CommonButton
              onClick={handleSendEmailVerification}
              isEnabled={
                inputValues.emailId.length >= 1 &&
                inputValues.emailDomain.length >= 1
              }
            >
              {isLoading ? <Loader /> : '인증 요청'}
            </CommonButton>
          ) : (
            <>
              <li>
                <div className="flex flex-row space-x-5 border-0 border-b-1 border-lightGray-4">
                  <CommonInput
                    placeholder="인증번호 6자리"
                    type="text"
                    name="emailVerificationCode"
                    onChange={handleChange}
                    maxLength={6}
                    className="border-none"
                  />
                  <input
                    type="hidden"
                    name="isEmailVerified"
                    value={inputValues.isEmailVerified}
                  />
                  <span className="block py-2.5 px-3 text-lg text-foreground">
                    {formatTime(remainingTime)}
                  </span>
                </div>
                <ul className="text-lightGray-6 text-sm mt-5">
                  <li>
                    • 인증 번호 메일이 오지 않을 시, 스팸 메일함을 확인해
                    주세요.
                  </li>
                  <li>• 인증 번호 재요청은 3분에 1회씩 가능합니다.</li>
                  <li>• 입력 5회 실패 시 인증 번호 메일을 재요청 해주세요.</li>
                  <li className="ml-2">
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
              <CommonButton
                onClick={handleVerifyCode}
                isEnabled={inputValues.emailVerificationCode.length === 6}
              >
                {isLoading ? <Loader /> : '인증번호 확인'}
              </CommonButton>
            </>
          )}
        </>
      )}
    </>
  );
}
