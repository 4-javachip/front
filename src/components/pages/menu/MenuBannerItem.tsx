import Link from 'next/link';
import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';

interface Props {
  href: string;
  title: string;
  description: string;
  onClick: () => void;
}

export default function MenuBannerItem({
  href,
  title,
  description,
  onClick,
}: Props) {
  return (
    <li className="h-19.5 hover:bg-gray-100 flex items-center">
      <Link
        href={href}
        onClick={onClick}
        className="flex justify-between items-center w-full py-3"
      >
        <div className="flex flex-col gap-1">
          <strong className="font-inter font-bold text-sm text-gray-900">
            {title}
          </strong>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <RightArrowIcon />
      </Link>
    </li>
  );
}
