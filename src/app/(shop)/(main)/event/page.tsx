import {
  getEventDataByEventUuid,
  getEventDatas,
} from '@/actions/event-service';
import EventCarousel from '@/components/pages/event/EventCarousel';
import EventSection from '@/components/pages/event/EventSection';
import { redirect } from 'next/navigation';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ event: string }>;
}) {
  const eventsData = await getEventDatas();
  const eventItems = eventsData.map((event) => ({
    id: event.eventUuid,
    name: event.name,
  }));

  const param = await searchParams;
  if (!param.event) {
    redirect(`?event=${eventsData[0].eventUuid}`);
  }
  const selectedEventUuid = param.event || eventsData[0].eventUuid;
  const selectedEventData = await getEventDataByEventUuid(selectedEventUuid);

  return (
    <main>
      <EventCarousel eventItems={eventItems} />
      <EventSection eventsData={selectedEventData} />
    </main>
  );
}
