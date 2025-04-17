import { cartItemCheck } from '@/actions/cart-service';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  checked: boolean;
  cartUuid: string;
  onChange?: (checked: boolean, cartUuid: string) => void;
  className?: string;
}

export default function Checkbox({
  checked,
  cartUuid,
  className,
}: CheckboxProps) {
  const handleCheck = () => {
    // e.preventDefault();
    const newchecked = !checked;
    // setIschecked(newchecked);

    cartItemCheck(cartUuid, newchecked);
  };
  return (
    <label className={cn('flex items-center gap-2', className)}>
      <div className="relative w-5.5 h-5.5">
        <input
          id="custom-checkbox"
          name="productchecked"
          type="checkbox"
          className="w-full h-full appearance-none border border-green rounded 
          checked:bg-green checked:border-transparent active:border-black
          cursor-pointer"
          checked={checked}
          onChange={handleCheck}
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
    </label>
  );
}
