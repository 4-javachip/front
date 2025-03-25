import CartIcon from '@/components/ui/icons/CartIcon';

export default function PerchaseBar() {
  return (
    <section
      className="fixed bg-background bottom-0
  w-full pt-3.5 px-6 pb-7 rounded-t-[1.3rem]
  shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)]
  flex flex-row gap-2 items-center"
    >
      <CartIcon />
      <button
        className="bg-green text-background rounded-[3.125rem] py-3 w-full
      font-inter font-semibold text-[0.8125rem] cursor-pointer"
      >
        구매하기
      </button>
    </section>
  );
}
