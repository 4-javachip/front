'use client';

import React from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import CloseButton from '@/components/ui/buttons/CloseButton';

interface Props {
  onClose: () => void;
  onComplete: (data: { zonecode: string; address: string }) => void;
}

const DaumPostcodeModal: React.FC<Props> = ({ onClose, onComplete }) => {
  const handleComplete = (data: Address) => {
    onComplete({ zonecode: data.zonecode, address: data.address });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-30">
      <div className="relative bg-white pt-20 w-full h-full max-w-[var(--base-w)] mx-auto">
        <div className="w-full h-full">
          <DaumPostcode
            onComplete={handleComplete}
            style={{ width: '100%', height: '100%' }}
            autoClose
          />
        </div>

        <CloseButton
          onClick={onClose}
          className="absolute top-4 right-4 z-10"
        />
      </div>
    </div>
  );
};

export default DaumPostcodeModal;
