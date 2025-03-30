import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';

export default function AuthTermsItem({ termName }: { termName: string }) {
  return (
    <li
      className="flex items-center justify-between
    cursor-pointer"
    >
      {/* 나중에 체크박스 컴포넌트로 만들예정 */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-5 h-5 appearance-none border border-green rounded
        flex items-center justify-center 
        checked:before:content-['✔'] checked:before:text-white
        checked:bg-green checked:border-transparent
        active:border-black"
        />
        <span className="font-medium text-sm">{termName}</span>
      </div>
      <RightArrowIcon />
    </li>
  );
}
