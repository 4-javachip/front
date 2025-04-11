'use client';

import CommonButton from '@/components/ui/buttons/CommonButton';
import DropDownIcon from '@/components/ui/icons/DropDownIcon';
import { ProductDescriptionType } from '@/types/ProductResponseDataTypes';
import { useState } from 'react';

export default function ProductDesc({
  detailDescription,
}: ProductDescriptionType) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <section className="py-3">
      <h2 className="font-pretendard font-bold pb-10">상품 정보</h2>
      <style jsx global>{`
        .collapse_on,
        .collapse_off {
          display: none;
        }
      `}</style>
      <div
        className={`inner-html overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[9999px]' : 'max-h-[31.25rem]'
        }`}
        dangerouslySetInnerHTML={{ __html: detailDescription }}
      />
      <CommonButton
        onClick={toggleExpanded}
        className="bg-background text-gray-1
        shadow-[0rem_0.125rem_0.5rem_rgba(0,0,0,0.12)]"
        isEnabled={true}
      >
        {expanded ? (
          <>
            {'상품정보 접기'}
            <span className="inline-flex items-center ml-1.5">
              <DropDownIcon size={12} className="rotate-180" />
            </span>
          </>
        ) : (
          <>
            {'상품정보 더보기'}
            <span className="inline-flex items-center ml-1.5">
              <DropDownIcon size={12} />
            </span>
          </>
        )}
      </CommonButton>
    </section>
  );
}
