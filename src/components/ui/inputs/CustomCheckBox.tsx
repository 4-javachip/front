export default function CustomCheckBox({
  label,
  onChange,
  checked,
}: {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <input
          type="checkbox"
          className="w-5.5 h-5.5 appearance-none border border-green rounded 
      checked:bg-green checked:border-transparent active:border-black flex items-center justify-center"
          onChange={onChange}
          checked={checked}
        />
        {checked && (
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 m-auto"
          >
            <path
              d="M13 1.5L4.75 9.75L1 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}
