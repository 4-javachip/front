import FooterPolicyLinkItem from './FooterPolicyLinksItem';
import { dummyPolicyLinks } from '@/data/dummyDatas';

export default function FooterPolicyLinks() {
  return (
    <nav className="pb-4 pt-5 pl-6 bg-lightGray-3 font-sd-gothic font-medium text-xs text-gray-500">
      <ul className="flex space-x-2.5">
        {dummyPolicyLinks.map((link, index) => (
          <FooterPolicyLinkItem
            key={link.label}
            href={link.href}
            label={link.label}
            showDivider={index < dummyPolicyLinks.length - 1}
          />
        ))}
      </ul>
    </nav>
  );
}
