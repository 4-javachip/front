'use client';

import React from 'react';
import CloseIcon from '@/components/ui/icons/CloseIcon';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

export default function CloseButton({
  onClick,
  className = '',
}: CloseButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center ${className}`}
      onClick={onClick}
    >
      <CloseIcon />
    </button>
  );
}
