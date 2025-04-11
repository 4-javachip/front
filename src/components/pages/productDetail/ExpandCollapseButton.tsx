'use client';

import CommonButton from '@/components/ui/buttons/CommonButton';
import DropDownIcon from '@/components/ui/icons/DropDownIcon';

export default function ExpandCollapseButton({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <CommonButton
      onClick={onClick}
      className="bg-background text-gray-1 shadow-[0rem_0.125rem_0.5rem_rgba(0,0,0,0.12)]"
      isEnabled={true}
    >
      <span className="inline-flex items-center">
        {expanded ? '상품정보 접기' : '상품정보 더보기'}
        <span className="inline-flex items-center ml-1.5">
          <DropDownIcon size={12} className={expanded ? 'rotate-180' : ''} />
        </span>
      </span>
    </CommonButton>
  );
}
