'use client';

import { IconMinus, IconPlus } from '@tabler/icons-react';
import { FC, useState } from 'react';

type ProductQuantityProps = {
  quantity: number;
};

export const ProductQuantity: FC<ProductQuantityProps> = ({ quantity }) => {
  const [count, setCount] = useState(quantity);

  if (count <= 0) setCount(1);

  if (count > 5) setCount(5);

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-bold">Quantity</h3>

      <div className="my-4 flex w-max items-center rounded-md border border-zinc-200/50 p-2">
        <button onClick={() => setCount(count - 1)}>
          <IconMinus size={16} />
        </button>
        <span className="w-20 text-center font-semibold">{count}</span>
        <button onClick={() => setCount(count + 1)}>
          <IconPlus size={16} />
        </button>
      </div>
    </div>
  );
};
