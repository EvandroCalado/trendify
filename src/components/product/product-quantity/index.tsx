import { IconMinus, IconPlus } from '@tabler/icons-react';
import { FC } from 'react';

type ProductQuantityProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
};

export const ProductQuantity: FC<ProductQuantityProps> = ({
  quantity,
  onQuantityChange,
}) => {
  const onValueChange = (value: number) => {
    if (quantity + value < 1 || quantity + value > 5) return;

    onQuantityChange(quantity + value);
  };

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-bold">Quantity</h3>

      <div className="my-4 flex w-max items-center rounded-md border border-zinc-200/50 p-2">
        <button onClick={() => onValueChange(-1)}>
          <IconMinus size={16} />
        </button>

        <span className="w-20 text-center font-semibold">{quantity}</span>
        <button onClick={() => onValueChange(+1)}>
          <IconPlus size={16} />
        </button>
      </div>
    </div>
  );
};
