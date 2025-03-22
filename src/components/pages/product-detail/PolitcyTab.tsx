import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';

export default function PolicyTab() {
  return (
    <div
      className="py-[14px] font-inter font-medium text-[14px] 
    flex items-center justify-between
    border-b border-lightGray-5 last:border-none"
    >
      <span>이용조건 및 배송 안내</span>
      <RightArrowIcon />
    </div>
  );
}
