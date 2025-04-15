import TextCarousel from '@/components/ui/carousels/TextCarousel';

export default function EventCarousel({
  eventItems,
}: {
  eventItems: {
    id: string;
    name: string;
  }[];
}) {
  return (
    <section className="flex flex-row container py-4.5">
      <TextCarousel items={eventItems} type="event" />
    </section>
  );
}
