import { shippingAddressAgreementType } from '@/types/ResponseDataTypes';

export default function Description({
  agreement,
}: {
  agreement: shippingAddressAgreementType;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-2">{agreement.name}</h2>

      <div
        className="prose max-w-none text-sm text-gray-700"
        dangerouslySetInnerHTML={{ __html: agreement.description }}
      />
    </section>
  );
}
