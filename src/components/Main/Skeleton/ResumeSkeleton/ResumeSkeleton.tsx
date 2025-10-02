import { Skeleton } from '@/components/ui/skeleton';

const ResumeSkeleton = () => {
  return (
    <section>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-32 rounded-xl bg-[#444444]" />
        <Skeleton className=" h-2 w-20 mt-5 bg-[#444444]" />
      </div>
      <div>
        <div>
          <Skeleton className="h-6 w-60 rounded-md bg-[#444444] mt-14 ml-10" />
          <div className="flex flex-col gap-10 mt-10">
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="h-6 w-60 rounded-md bg-[#444444] mt-14 ml-10" />
          <div className="flex flex-col gap-10 mt-10">
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="h-6 w-60 rounded-md bg-[#444444] mt-14 ml-10" />
          <div className="flex flex-col gap-10 mt-10">
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
            <div>
              <Skeleton className="h-3 w-64 rounded-md bg-[#444444]  ml-10" />
              <Skeleton className="h-2 w-28 rounded-md bg-[#444444] mt-2 ml-10" />
              <Skeleton className="h-2 w-40 rounded-md bg-[#444444] mt-2 ml-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSkeleton;
