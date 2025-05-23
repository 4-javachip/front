import TextCarousel from '@/components/ui/carousels/TextCarousel';

export default function CategoryOptionCarousel({
  items,
  title,
  type,
}: {
  items: { id: number; name: string }[];
  title?: string;
  type: string;
}) {
  return (
    <>
      <section className="flex flex-row container py-4.5">
        {title && (
          <h2
            className="font-body text-[0.875rem] font-semibold
    whitespace-nowrap
    pl-6 pr-3.5"
          >
            {title}
          </h2>
        )}
        <TextCarousel items={items} type={type} />
      </section>
      <hr className="border-t-1 border-lightGray-5" />
    </>
  );
}
