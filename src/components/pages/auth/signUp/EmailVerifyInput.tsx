'use client';
import {
  checkEmailDuplicate,
  sendEmailVerificationAction,
  verifyEmailCodeAction,
} from '@/actions/auth';
import CommonButton from '@/components/ui/buttons/CommonButton';
import CommonInput from '@/components/ui/inputs/CommonInput';
import Loader from '@/components/ui/loaders/loader';
import {
  EmailVerifyStateType,
  SignUpStoreStateType,
} from '@/types/storeDataTypes';
import { useRef, useState } from 'react';
import AlertModal from '@/components/ui/dialogs/AlertModal';

export default function EmailVerifyInput({
  handleChange,
  inputValues,
  purpose,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValues: SignUpStoreStateType | EmailVerifyStateType;
  purpose: 'sign_up' | 'password_reset' | 'account_recovery';
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

    const email = `${inputValues.emailId}@${inputValues.emailDomain}`;
    const isDuplicated = await checkEmailDuplicate({ email });
    console.log(isDuplicated);

    // true : 중복 / false : 체크 통과(중복X)
    if (purpose === 'sign_up') {
      if (isDuplicated.result) {
        setModalErrorMessage('이미 사용 중인 이메일입니다.');
        setIsLoading(false);
        setErrorModalOpen(true);
        setRemainingTime(0);
        return false;
      }
    } else {
      if (!isDuplicated.result) {
        setModalErrorMessage('등록되지 않은 이메일입니다.');
        setIsLoading(false);
        setErrorModalOpen(true);
        setRemainingTime(0);
        return false;
      }
    }

    const res = await sendEmailVerificationAction({
      email,
      purpose: purpose,
    });

    if (res.success === false) {
      setModalErrorMessage(res.message);
      setErrorModalOpen(true);
      setIsLoading(false);
      return false;
    }

    startTimer();

    handleChange({
      target: {
        name: 'isEmailSent',
        value: 'true',
      },
    } as React.ChangeEvent<HTMLInputElement>);

    setIsLoading(false);
    return true;
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    const email = `${inputValues.emailId}@${inputValues.emailDomain}`;
    const code = inputValues.emailVerificationCode;
    const res = await verifyEmailCodeAction({
      email,
      verificationCode: code,
      purpose: purpose,
    });

    if (res.success === false) {
      setModalErrorMessage(res.message);
      setErrorModalOpen(true);
      setIsLoading(false);
      return;
    }

    handleChange({
      target: {
        name: 'isEmailVerified',
        value: 'true',
      },
    } as React.ChangeEvent<HTMLInputElement>);

    setIsLoading(false);
  };

  return (
    <>
      <AlertModal
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
