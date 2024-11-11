'use client';

import { getStockBySlug } from '@/actions/products';
import clsx from 'clsx';
import { FC, useCallback, useEffect, useState } from 'react';

type ProductStockLabelProps = {
  slug: string;
};

export const ProductStockLabel: FC<ProductStockLabelProps> = ({ slug }) => {
  const [inStock, setInStock] = useState<number | null>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const getStock = useCallback(async () => {
    const stock = await getStockBySlug({ slug });

    setInStock(stock);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    getStock();
  }, [getStock, slug]);

  return (
    <div
      className={clsx(
        'flex items-center gap-1 font-title text-sm font-semibold text-zinc-400',
      )}
    >
      Stock:{' '}
      {loading ? (
        <span className="block h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        inStock
      )}
    </div>
  );
};
