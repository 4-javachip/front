import CommonButton from '@/components/ui/buttons/CommonButton';
import CartIcon from '@/components/ui/icons/CartIcon';

export default function PerchaseBarBottomContent({
  onClickPurchase,
}: {
  onClickPurchase: () => void;
}) {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row justify-between">
        <p className="text-lightGray-1 text-sm">총 금액</p>
        <p className="font-bold font-sd-gothic text-xl">34,000원</p>
      </div>

      <div className="flex flex-row gap-2 items-center w-full">
        <CartIcon />
        <CommonButton
          className="font-semibold"
          isEnabled={true}
          onClick={onClickPurchase}
        >
          구매하기
        </CommonButton>
      </div>
    </div>
  );
}
