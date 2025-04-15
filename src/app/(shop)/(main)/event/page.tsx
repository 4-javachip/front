import {
  getEventDataByEventUuid,
  getEventDatas,
} from '@/actions/event-service';
import NotFoundLayout from '@/components/layouts/NotFoundLayout';
import EventCarousel from '@/components/pages/event/EventCarousel';
import EventSection from '@/components/pages/event/EventSection';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ event: string }>;
}) {
  const { data: eventsData } = await getEventDatas();
  if (eventsData.length <= 0)
    return (
      <NotFoundLayout
        message="진행중인 이벤트가 없습니다."
        linkText="홈으로"
        linkHref="/"
      />
    );

  const eventItems = eventsData.map((event) => ({
    id: event.eventUuid,
    name: event.name,
  }));

  const { event } = await searchParams;
  if (event === undefined || '') {
    console.log('undefined');
    return (
      <NotFoundLayout
        message="진행중인 이벤트가 없습니다."
        linkText="홈으로"
        linkHref="/"
      />
    );
  }

  const { data: selectedEventData } = await getEventDataByEventUuid(event);
  if (!selectedEventData) {
    return (
      <NotFoundLayout
        message="진행중인 이벤트가 없습니다."
        linkText="홈으로"
        linkHref="/"
      />
    );
  }

  return (
    <main>
      <EventCarousel eventItems={eventItems} />
      <EventSection eventsData={selectedEventData} />
    </main>
  );
}
