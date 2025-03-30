export default function CustomCheckBox({
  label,
  onChange,
}: {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="terms-checkbox
      w-5 h-5 appearance-none border border-green rounded
    flex items-center justify-center 
    checked:before:content-['✔'] checked:before:text-white checked:before:text-sm
    checked:bg-green checked:border-transparent
    active:border-black"
        onChange={onChange}
      />
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}
