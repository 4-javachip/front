import Image from 'next/image';
import { EventDataType } from '@/types/EventResponseDataType';
import EventProductList from './EventProductList';

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
      {/* 기획전 유의사항 추가필요 */}
      <EventProductList eventUuid={eventUuid} />
    </>
  );
}
