import CartIcon from '@/components/ui/icons/CartIcon';

export default function PerchaseBar() {
  return (
    <div
      className="fixed bg-background bottom-0
  w-full pt-[15px] px-6 pb-7 rounded-t-[1.3rem]
  shadow-[-2px_-2px_8px_rgba(0,0,0,0.08)]
  flex flex-row gap-2 items-center"
    >
      <CartIcon />
      <button
        className="bg-green text-background rounded-[50px] py-3 w-full
      font-inter font-semibold text-[13px] cursor-pointer"
      >
        구매하기
      </button>
    </div>
  );
}
