'use client';
import { checkedAllItem } from '@/actions/cart-service';
import { CommonLayout } from '@/components/layouts/CommonLayout';

export default function CartAllCheck({ checked }: { checked: boolean }) {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('checked', checked);
    const newChecked = !checked;
    console.log('newChecked', newChecked);
    checkedAllItem(newChecked);
  };
  return (
    <CommonLayout.SectionInnerPadding className="flex gap-2 items-center ">
      <div className="relative w-5.5 h-5.5">
        <input
          type="checkbox"
          checked={checked}
          id="all-check"
          onChange={handleChangeCheckbox}
          className="w-full h-full appearance-none border border-green rounded 
          checked:bg-green checked:border-transparent active:border-black
          cursor-pointer"
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
      <label
        htmlFor="all-check"
        className="text-sm text-slate-500 cursor-pointer"
      >
        전체선택
      </label>

      {/* <CartDeleteButtons cartUuid={cartItem.cartUuid} /> */}
    </CommonLayout.SectionInnerPadding>
  );
}
