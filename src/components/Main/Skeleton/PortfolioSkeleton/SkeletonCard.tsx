import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[180px] w-auto rounded-xl bg-[#444444]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-auto bg-[#444444]" />
        <Skeleton className="h-4 w-[70%] bg-[#444444]" />
      </div>
    </div>
  );
}
