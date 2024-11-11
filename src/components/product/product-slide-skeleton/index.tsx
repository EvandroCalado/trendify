import { IconPhotoFilled } from '@tabler/icons-react';

export const ProductSlideSkeleton = () => {
  return (
    <>
      <div className="flex h-[500px] w-full animate-pulse items-center justify-center overflow-hidden rounded-lg bg-zinc-200 md:mb-5">
        <IconPhotoFilled size={100} className="text-zinc-400" />
      </div>
      <div className="flex gap-3">
        <div className="flex h-[140px] w-[140px] animate-pulse items-center justify-center overflow-hidden rounded-lg bg-zinc-200 max-md:hidden">
          <IconPhotoFilled size={50} className="text-zinc-400" />
        </div>
        <div className="flex h-[140px] w-[140px] animate-pulse items-center justify-center overflow-hidden rounded-lg bg-zinc-200 max-md:hidden">
          <IconPhotoFilled size={50} className="text-zinc-400" />
        </div>
        <div className="flex h-[140px] w-[140px] animate-pulse items-center justify-center overflow-hidden rounded-lg bg-zinc-200 max-md:hidden">
          <IconPhotoFilled size={50} className="text-zinc-400" />
        </div>
        <div className="flex h-[140px] w-[140px] animate-pulse items-center justify-center overflow-hidden rounded-lg bg-zinc-200 max-md:hidden">
          <IconPhotoFilled size={50} className="text-zinc-400" />
        </div>
      </div>
    </>
  );
};
