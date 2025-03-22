import Image from 'next/image';

export default function ProductImg() {
  return (
    <div className="w-full h-[390px] flex-shrink-0 relative">
      <Image
        src="https://dummyimage.com/1000"
        alt="desc"
        fill
        className="object-cover w-full h-full"
      />
    </div>
  );
}
