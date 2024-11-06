import { FC } from 'react';

type SeparatorProps = {
  middleText?: string;
};

export const Separator: FC<SeparatorProps> = ({ middleText }) => (
  <div className="relative">
    <div className="my-10 h-px w-full bg-zinc-200" />
    {middleText && (
      <span className="absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 font-semibold">
        {middleText}
      </span>
    )}
  </div>
);
