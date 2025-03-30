import DeleteIcon from '../icons/DeleteIcon';

interface DeleteButtonProps {
  onDelete: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <button type="button" onClick={onDelete} className="text-gray-300 text-xl">
      <DeleteIcon />
    </button>
  );
}
