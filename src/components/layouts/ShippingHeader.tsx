import ShippingBackButton from '../ui/buttons/ShippingBackButton';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
}

export default function PageHeader({
  title,
  showBackButton = true,
}: PageHeaderProps) {
  return (
    <header className="relative flex items-center h-14 shadow-md ">
      {showBackButton && (
        <div className="flex items-center h-full">
          <ShippingBackButton />
        </div>
      )}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-sm font-semibold ">
        {title}
      </h1>
    </header>
  );
}
