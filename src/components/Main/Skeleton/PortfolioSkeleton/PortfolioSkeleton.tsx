import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonCard } from './SkeletonCard';

const PortfolioSkeleton = () => {
  return (
    <section>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-32 rounded-xl bg-[#444444]" />
        <Skeleton className=" h-2 w-20 mt-5 bg-[#444444]" />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
};

export default PortfolioSkeleton;
