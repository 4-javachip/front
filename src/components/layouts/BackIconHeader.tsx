import BackArrowIcon from '../ui/icons/BackArrowIcon';

export default function BackIconHeader({ onClick }: { onClick: () => void }) {
  return (
    <header
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[var(--base-w)] z-50 p-1.5
    mx-auto"
    >
      <div className="flex items-center h-14">
        <button onClick={onClick} className="cursor-pointer">
          <BackArrowIcon />
        </button>
      </div>
    </header>
  );
}
