export const CartSummarySkeleton = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="h-[17px] w-[180px] animate-pulse rounded-lg bg-zinc-200" />

      <div className="flex items-center justify-between">
        <div className="h-[10px] w-[100px] animate-pulse rounded-lg bg-zinc-200" />
        <div className="h-[10px] w-[20px] animate-pulse rounded-lg bg-zinc-200" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="h-[10px] w-[100px] animate-pulse rounded-lg bg-zinc-200" />
          <div className="h-[10px] w-[60px] animate-pulse rounded-lg bg-zinc-200" />
        </div>

        <div className="flex items-center justify-between">
          <div className="h-[10px] w-[120px] animate-pulse rounded-lg bg-zinc-200" />
          <div className="h-[10px] w-[50px] animate-pulse rounded-lg bg-zinc-200" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="h-[17px] w-[60px] animate-pulse rounded-lg bg-zinc-200" />
        <div className="h-[17px] w-[60px] animate-pulse rounded-lg bg-zinc-200" />
      </div>

      <div className="h-[44px] w-full animate-pulse rounded bg-zinc-200" />
    </div>
  );
};
