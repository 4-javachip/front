import BackArrowIcon from '../ui/icons/BackArrowIcon';

export default function BackIconHeader({ onClick }: { onClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 z-50 p-1.5">
      <div className="flex items-center h-14 cursor-pointer" onClick={onClick}>
        <BackArrowIcon />
      </div>
    </header>
  );
}
