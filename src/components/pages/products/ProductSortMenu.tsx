import DropDownIcon from '@/components/ui/icons/DropDownIcon';

export default function ProductSortMenu() {
  return (
    <div
      className="pt-4
      flex flex-row gap-1.5 items-center"
    >
      <p className="font-inter text-xs">신상품순</p>
      <DropDownIcon />
    </div>
  );
}
