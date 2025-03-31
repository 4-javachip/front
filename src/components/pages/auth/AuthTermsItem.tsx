import RightArrowIcon from '@/components/ui/icons/RightArrowIcon';
import CustomCheckBox from '@/components/ui/inputs/CustomCheckBox';
import { AgreementType } from '@/types/ResponseDataTypes';

export default function AuthTermsItem({
  name,
  description,
  type,
  required,
  checked,
  onChange,
}: AgreementType & { checked: boolean; onChange: () => void }) {
  return (
    <li className="flex items-center justify-between">
      <CustomCheckBox
        label={`${required ? '[필수] ' : '[선택] '}${name}`}
        checked={checked}
        onChange={onChange}
      />
      <RightArrowIcon />
    </li>
  );
}
