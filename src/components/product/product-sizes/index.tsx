import type { Size } from '@/types';
import clsx from 'clsx';
import { FC } from 'react';

type ProductSizesProps = {
  selectedSize?: Size;
  availableSizes: Size[];
  onSizeChange: (size: Size) => void;
};

export const ProductSizes: FC<ProductSizesProps> = ({
  selectedSize,
  availableSizes,
  onSizeChange,
}) => {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-bold">Sizes</h3>

      <div className="flex items-center gap-2">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx('rounded px-2 hover:bg-zinc-200/50', {
              'bg-zinc-200/50': size === selectedSize,
            })}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
