// components/layout/Footer.tsx
import FooterLogoIcon from '@/components/ui/icons/FooterLogoIcon';
import FooterPolicyLinks from './FooterPolicyLinks';

export default function Footer() {
  return (
    <footer className="mt-10 w-full pb-[100px]">
      <div>
        <FooterPolicyLinks />

        <div className="flex justify-start py-2.5 px-4">
          <FooterLogoIcon />
        </div>

        <div className="text-start text-xs bg-white px-4 text-[#999999]">
          &copy; {new Date().getFullYear()} Starbucks Coffee Company. All Rights
          Reserved. Hosting By (주)신세계아이앤씨
          <br />
        </div>
      </div>
    </footer>
  );
}
