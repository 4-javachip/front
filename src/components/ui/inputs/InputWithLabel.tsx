import { cn } from '@/lib/utils';

export default function InputWithLabel({
  label,
  name,
  className,
  ...props
}: {
  label?: string;
  name: string;
  className?: string;
} & React.ComponentProps<'input'>) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 font-semibold font-sd-gothic"
        >
          {label}
        </label>
      )}
      <input
        name={name}
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
