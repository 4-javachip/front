import Image from 'next/image';
import { EventDataType } from '@/types/ProductResponseDataTypes';
import EventProductList from './EventProductList';
import PrecautionAccordion from './PrecautionAccordion';

export default async function EventSection({
  eventsData,
}: {
  eventsData: EventDataType;
}) {
  const eventUuid = eventsData.eventUuid;

  return (
    <>
      <Image
        src={eventsData.imageUrl}
        alt={eventsData.description}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
      />
      <section>
        <PrecautionAccordion title="기획전 유의사항">
          <ul className="text-lightGray-1 text-sm">
            <li>{eventsData.precaution}</li>
          </ul>
        </PrecautionAccordion>
      </section>
      <EventProductList eventUuid={eventUuid} />
    </>
  );
}
