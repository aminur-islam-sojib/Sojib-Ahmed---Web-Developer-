import { Skeleton } from '@/components/ui/skeleton';
const ContactSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-32 rounded-xl bg-[#444444]" />
        <Skeleton className=" h-2 w-20 mt-5 bg-[#444444]" />
      </div>
    </div>
  );
};

export default ContactSkeleton;
