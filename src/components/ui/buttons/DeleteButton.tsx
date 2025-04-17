import { deleteCartItem } from '@/actions/cart-service';
import DeleteIcon from '../icons/DeleteIcon';

interface DeleteButtonProps {
  cartUuid: string;
}

export default function DeleteButton({ cartUuid }: DeleteButtonProps) {
  const onDelete = async () => {
    console.log('삭제할 항목:', cartUuid);
    await deleteCartItem(cartUuid);
  };
  return (
    <button type="button" onClick={onDelete} className="text-gray-300 text-xl">
      <DeleteIcon />
    </button>
  );
}
