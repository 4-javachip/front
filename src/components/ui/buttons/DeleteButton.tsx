import DeleteIcon from '../icons/DeleteIcon';

interface DeleteButtonProps {
  onDelete: (uuid: string) => void;
  cartUuid: string;
}

export default function DeleteButton({
  onDelete,
  cartUuid,
}: DeleteButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onDelete(cartUuid)}
      className="text-gray-300 text-xl"
    >
      <DeleteIcon />
    </button>
  );
}
