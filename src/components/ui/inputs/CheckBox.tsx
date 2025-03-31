interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
  className?: string;
}

export default function Checkbox({
  checked,
  onChange,
  className = '',
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`terms-checkbox
      w-5 h-5 appearance-none border border-green rounded
    flex items-center justify-center 
    checked:before:content-['✔'] checked:before:text-white checked:before:text-sm
    checked:bg-green checked:border-transparent
    active:border-black${className}`}
    />
  );
}
