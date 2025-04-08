export default function CustomCheckBox({
  label,
  name,
  onChange,
  checked,
}: {
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) {
  return (
    <label className="flex items-center gap-2">
      <div className="relative w-5.5 h-5.5">
        <input
          id="custom-checkbox"
          name={name}
          type="checkbox"
          className="w-full h-full appearance-none border border-green rounded 
          checked:bg-green checked:border-transparent active:border-black
          cursor-pointer"
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
            className="absolute inset-0 m-auto pointer-events-none"
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
    </label>
  );
}
