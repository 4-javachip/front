interface CustomRadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

export default function CustomRadio({
  name,
  value,
  checked,
  onChange,
}: CustomRadioButtonProps) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-green cursor-pointer mt-1"
      />
    </label>
  );
}
