import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';

export default function PolicyTab() {
  return (
    <ul
      className="py-[14px] font-body font-medium text-[14px] 
    flex items-center justify-between
    border-b border-lightGray-5 last:border-none
    cursor-pointer"
    >
      <li>이용조건 및 배송 안내</li>
      <li>
        <RightArrowIcon />
      </li>
    </ul>
  );
}
