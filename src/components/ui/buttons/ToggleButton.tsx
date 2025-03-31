'use client';

import DropDownIcon from '@/components/ui/icons/DropDownIcon';

interface ToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ToggleButton({ isOpen, onToggle }: ToggleButtonProps) {
  return (
    <button className="text-gray-500" onClick={onToggle} aria-expanded={isOpen}>
      <DropDownIcon
        className={`transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
}
