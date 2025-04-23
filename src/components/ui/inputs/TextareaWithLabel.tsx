import { cn } from '@/lib/utils';

export default function TextareaWithLabel({
  label,
  id,
  className,
  ...props
}: {
  label?: string;
  id: string;
  className?: string;
} & React.ComponentProps<'textarea'>) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block mb-1 font-semibold font-sd-gothic">
          {label}
        </label>
      )}
      <textarea
        id={id}
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
