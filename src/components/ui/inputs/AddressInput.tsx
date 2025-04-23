export default function AddressInput({
  label,
  id,
  onChange,
  readOnly,
  value,
  name,
}: {
  label: string;
  id: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  value?: string;
  name?: string;
}) {
  return (
    <>
      <div className="relative z-0">
        <input
          type="text"
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-foreground bg-transparent 
          border-0 border-b-1 border-lightGray-4 appearance-none 
          focus:outline-none focus:ring-0 focus:border-green peer"
          placeholder=""
          onChange={onChange}
          readOnly={readOnly}
          value={value}
          name={name}
        />
        <label
          htmlFor={id}
          className="absolute text-foreground  font-body text-sm
          duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
          peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {label}
        </label>
      </div>
    </>
  );
}
