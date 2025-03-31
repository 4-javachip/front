export default function CommonInput({
  label,
  type,
  id,
}: {
  label: string;
  type: string;
  id: string;
}) {
  return (
    <input
      type={type}
      id={id}
      className="block py-2.5 px-3 w-full text-lg text-foreground bg-transparent 
  border-0 border-b-1 border-lightGray-4 appearance-none 
  focus:outline-none focus:ring-0 focus:border-green peer"
      placeholder={label}
    />
  );
}
