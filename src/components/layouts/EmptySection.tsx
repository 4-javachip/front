type EmptySectionProps = {
  title: string;
  description?: string;
};

export default function EmptySection({
  title,
  description,
}: EmptySectionProps) {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {description && <p className="text-lightGray-1 text-sm">{description}</p>}
    </section>
  );
}
