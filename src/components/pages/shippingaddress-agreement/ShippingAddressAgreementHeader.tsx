'use client';
import { userAgreement } from '@/actions/agreement-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { Switch } from '@/components/ui/switch';

import TextTitleH1 from '@/components/ui/texts/TextTitleH1';
import { UserAgreementType } from '@/types/AgreementDataType';
import React, { useEffect, useState } from 'react';

export default function ShippingAddressAgreementHeader({
  userAgreed,
  agreementId,
}: {
  userAgreed: UserAgreementType[];
  agreementId: number;
}) {
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  console.log('userAgreed', userAgreed);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = async () => {
    if (isCheck) {
      setOpenModal(true);
    } else {
      try {
        setLoading(true);
        await userAgreement({ agreementId, agreed: true });
        setIsCheck(true);
      } catch (err) {
        console.error('동의 처리 실패', err);
        alert('동의 처리에 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }
  };
  const handleDisagreeConfirm = async () => {
    try {
      await userAgreement({
        agreementId,
        agreed: false,
      });
      setIsCheck(false);
    } catch (err) {
      console.error('약관 비동의 실패:', err);
    } finally {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    setIsCheck(userAgreed.length > 0 ? userAgreed[0].agreed : false);
  }, [userAgreed]);

  return (
    <main>
      <ul className="flex justify-between items-center w-full h-full  ">
        <li>
          <TextTitleH1 className="px-6">
            배송지 정보 수집 및 이용 동의
          </TextTitleH1>
        </li>
        <div className="flex items-center justify-center px-6 ">
          <Switch checked={isCheck} onClick={handleClick} disabled={loading} />
        </div>
        <ConfirmModal
          open={openModal}
          onOpenChange={setOpenModal}
          title="배송지 정보 수집 및 이용 동의"
          description="배송지 정보 수집 및 이용 동의를 해제하시겠습니까?
           해제 시 저장된 배송지 정보가 모두 삭제됩니다"
          confirmText="동의하지 않음"
          cancelText="취소"
          onConfirm={handleDisagreeConfirm}
        />
      </ul>
      <CommonLayout.SectionInnerPadding>
        <CommonLayout.CommonBorder />
      </CommonLayout.SectionInnerPadding>
    </main>
  );
}
