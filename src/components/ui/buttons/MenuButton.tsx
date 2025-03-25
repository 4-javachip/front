import MenuIcon from '@/components/ui/icons/MenuIcon';

interface Props {
  onClick: () => void;
}

export default function MenuButton({ onClick }: Props) {
  return (
    <button onClick={onClick} aria-label="메뉴 열기">
      <MenuIcon />
    </button>
  );
}
