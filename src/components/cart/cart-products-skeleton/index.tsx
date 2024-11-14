import { IconPhotoFilled } from '@tabler/icons-react';

export const CartProductsSkeleton = () => {
  return (
    <div className="flex w-full flex-[3] flex-col pt-5">
      <div className="mb-7 h-[10px] w-[200px] animate-pulse rounded-lg bg-zinc-200" />

      <div className="mb-5 flex w-full gap-5">
        <div className="flex h-[100px] w-[120px] animate-pulse items-center justify-center overflow-hidden rounded-md bg-zinc-200 max-md:hidden">
          <IconPhotoFilled size={50} className="text-zinc-400" />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="h-[20px] w-[200px] animate-pulse rounded-lg bg-zinc-200" />
            <div className="h-[20px] w-[50px] animate-pulse rounded-lg bg-zinc-200" />
          </div>

          <div className="h-[20px] w-[80px] animate-pulse rounded-lg bg-zinc-200" />
          <div className="h-[38px] w-[250px] animate-pulse rounded-2xl bg-zinc-200" />
        </div>
      </div>

      <div className="mb-5 flex w-full gap-5">
        <div className="flex h-[100px] w-[120px] animate-pulse items-center justify-center overflow-hidden rounded-md bg-zinc-200 max-md:hidden">
          <IconPhotoFilled size={50} className="text-zinc-400" />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="h-[20px] w-[200px] animate-pulse rounded-lg bg-zinc-200" />
            <div className="h-[20px] w-[50px] animate-pulse rounded-lg bg-zinc-200" />
          </div>

          <div className="h-[20px] w-[80px] animate-pulse rounded-lg bg-zinc-200" />
          <div className="h-[38px] w-[250px] animate-pulse rounded-2xl bg-zinc-200" />
        </div>
      </div>
    </div>
  );
};
