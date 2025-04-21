export function ReviewRatingSkeleton() {
  return <div className="w-[88px] h-5 bg-lightGray-5 rounded-sm" />;
}

export function ReviewNameSkeleton() {
  return <div className="w-16 h-5 bg-lightGray-5 rounded-sm" />;
}

export function ReviewImageSkeleton() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-3">
      <div className="w-[150px] h-[200px] bg-lightGray-5 rounded-sm shrink-0" />
    </div>
  );
}

export default function ReviewItemSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center gap-2 pb-4">
        <ReviewRatingSkeleton />
        <ReviewNameSkeleton />
      </div>
      {/* <ReviewImageSkeleton /> */}
      <div className="space-y-2">
        <div className="w-full h-5 bg-lightGray-5 rounded-sm" />
        <div className="w-4/5 h-5 bg-lightGray-5 rounded-sm" />
      </div>
    </div>
  );
}
