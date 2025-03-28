interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
  className?: string;
}

export default function Checkbox({
  checked,
  onChange,
  ariaLabel,
  className = '',
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`accent-green-600 ${className}`}
      aria-label={ariaLabel}
    />
  );
}
