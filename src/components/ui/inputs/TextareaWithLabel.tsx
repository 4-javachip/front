import { cn } from '@/lib/utils';

export default function TextareaWithLabel({
  label,
  name,
  className,
  ...props
}: {
  label?: string;
  name: string;
  className?: string;
} & React.ComponentProps<'textarea'>) {
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
      <textarea
        name={name}
        className={cn(
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg',
          'block w-full p-2.5 resize-none',
          className
        )}
        {...props}
      />
    </div>
  );
}
