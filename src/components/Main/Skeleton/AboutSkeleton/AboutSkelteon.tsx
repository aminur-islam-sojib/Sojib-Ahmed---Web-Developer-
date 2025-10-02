import { Skeleton } from '@/components/ui/skeleton';

export function AboutSkeleton() {
  return (
    <section>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-32 rounded-xl bg-[#444444]" />
        <Skeleton className=" h-2 w-20 mt-5 bg-[#444444]" />
      </div>
      {/* Test Skeleton  */}
      <div className=" flex flex-col gap-5">
        <div className="mt-10 flex flex-col gap-2">
          <Skeleton className=" h-2 w-full bg-[#444444]" />
          <Skeleton className=" h-2 w-full bg-[#444444]" />
          <Skeleton className=" h-2 w-[50%] bg-[#444444]" />
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <Skeleton className=" h-2 w-full bg-[#444444]" />
          <Skeleton className=" h-2 w-full bg-[#444444]" />
          <Skeleton className=" h-2 w-[50%] bg-[#444444]" />
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <Skeleton className=" h-2 w-full bg-[#444444]" />
          <Skeleton className=" h-2 w-[50%] bg-[#444444]" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-auto rounded-xl bg-[#444444]" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-auto bg-[#444444]" />
            <Skeleton className="h-4 w-[70%] bg-[#444444]" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-auto rounded-xl bg-[#444444]" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-auto bg-[#444444]" />
            <Skeleton className="h-4 w-[70%] bg-[#444444]" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-auto rounded-xl bg-[#444444]" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-auto bg-[#444444]" />
            <Skeleton className="h-4 w-[70%] bg-[#444444]" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-auto rounded-xl bg-[#444444]" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-auto bg-[#444444]" />
            <Skeleton className="h-4 w-[70%] bg-[#444444]" />
          </div>
        </div>
      </div>

      {/* Card Skeleton  */}
    </section>
  );
}
