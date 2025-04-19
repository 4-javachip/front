import { useModalContext } from '@/context/SideBarContext';
import { CommonLayout } from '../layouts/CommonLayout';
import SearchInput from '../ui/inputs/SearchInput';
import CloseButton from '../ui/buttons/CloseButton';
import RecentSearchList from './RecentSearchList';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useModalContext();
  if (!isSearchOpen) return null;

  return (
    <div
      className="fixed max-w-[var(--base-w)]
    z-[3000] w-full h-full bg-background
    border-r border-lightGray-5"
    >
      <CommonLayout.CommonHeader className="padded flex items-center gap-3.5">
        <SearchInput />
        <CloseButton onClick={() => setIsSearchOpen(false)} />
      </CommonLayout.CommonHeader>
      <div className="pt-14">
        <RecentSearchList
          items={['사과', '바나나', '포도', '복숭아']}
          onClearAll={() => console.log('전체 삭제')}
          onRemove={(term) => console.log(`${term} 삭제`)}
        />
      </div>
    </div>
  );
}
