import CommonInput from '@/components/ui/inputs/CommonInput';
import AuthEmailInput from './AuthEmailInput';

export default function SignUpForm() {
  return (
    <section className="padded space-y-6">
      <AuthEmailInput />
      <CommonInput label="비밀번호 (10~20자리 이내)" type="password" />
      <CommonInput label="비밀번호 확인" type="password" />
    </section>
  );
}
