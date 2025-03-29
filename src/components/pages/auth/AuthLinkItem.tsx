import Link from 'next/link';

export default function AuthLinkItem({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link href={`/auth/${link}`} className="text-xs">
      {text}
    </Link>
  );
}
