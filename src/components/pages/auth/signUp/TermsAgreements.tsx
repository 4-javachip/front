'use state';

import { getSignUpAgreementData } from '@/actions/auth';
import AuthGreeting from '@/components/pages/auth/AuthGreeting';
import AuthTermsList from '@/components/pages/auth/AuthTermsList';
import Loader from '@/components/ui/loader';
import { AgreementType } from '@/types/ResponseDataTypes';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { useEffect, useState } from 'react';

export default function TermsAgreements({
  onChange,
  inputValues,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValues: SignUpStoreStateType;
}) {
  const [agreements, setAgreements] = useState<AgreementType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSignUpAgreementData();
      setAgreements(res);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="absolute inset-0 flex items-center justify-center">
        <Loader />
      </section>
    );
  }

  return (
    <>
      <AuthGreeting type="signUp" />
      <AuthTermsList agreements={agreements} />
    </>
  );
}
