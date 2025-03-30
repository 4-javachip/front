import { dummyAggrementData } from '@/data/dummyDatas';
import AuthTermsItem from './AuthTermsItem';

export default function AuthTermsList() {
  return (
    <section className="padded">
      <ul className="space-y-7.5">
        {dummyAggrementData.map((term, index) => (
          <AuthTermsItem key={index} {...term} />
        ))}
      </ul>
    </section>
  );
}
