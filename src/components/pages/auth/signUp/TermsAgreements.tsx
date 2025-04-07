'use state';

import { getSignUpAgreementData } from '@/actions/auth';
import AuthGreeting from '@/components/pages/auth/AuthGreeting';
import AuthTermsList from '@/components/pages/auth/AuthTermsList';
import { AgreementType } from '@/types/ResponseDataTypes';
import { useEffect, useState } from 'react';

export default function TermsAgreements() {
  const [agreements, setAgreements] = useState<AgreementType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSignUpAgreementData();
      setAgreements(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <AuthGreeting type="signUp" />
      <AuthTermsList agreements={agreements} />
    </>
  );
}
