import MenuIcon from '@/components/ui/icons/MenuIcon';

interface Props {
  onClick: () => void;
}

export default function MenuButton({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      <MenuIcon />
    </button>
  );
}
