import { emailDomains } from '@/data/initialDatas';

export default function EmailDomainDropdownModal({
  onSelect,
  dropdownRef,
}: {
  onSelect: (domain: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={dropdownRef}
      className="hidden absolute w-full z-50 top-8 -right-5 mx-6
            bg-background shadow-[0_0_0.5rem_rgba(0,0,0,0.08)] rounded-md mt-2
            overflow-hidden"
    >
      <ul>
        {emailDomains.map((option) => (
          <li
            key={option.value}
            className="p-3 cursor-pointer border-b last:border-b-0 hover:bg-lightGray-2 text-base"
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
