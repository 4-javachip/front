import { cn } from '@/lib/utils';

export default function InputWithLabel({
  label,
  id,
  className,
  ...props
}: {
  label?: string;
  id: string;
  className?: string;
} & React.ComponentProps<'input'>) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-1 font-semibold font-sd-gothic">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg',
          'block w-full p-2.5',
          className
        )}
        {...props}
      />
    </div>
  );
}
