import AuthTermsItem from './AuthTermsItem';

export default function AuthTermsList() {
  return (
    <section className="padded">
      <ul className="space-y-7.5">
        <AuthTermsItem termName="[필수] 이용약관 동의" />
        <AuthTermsItem termName="[필수] 이용약관 동의" />
      </ul>
    </section>
  );
}
