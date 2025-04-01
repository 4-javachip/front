'use client';

import DropDownIcon from '@/components/ui/icons/DropDownIcon';

interface ToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ToggleButton({ isOpen, onToggle }: ToggleButtonProps) {
  return (
    <button onClick={onToggle}>
      <DropDownIcon
        size={20}
        className={`ml-1 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
}
