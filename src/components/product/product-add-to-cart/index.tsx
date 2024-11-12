'use client';

import { Button } from '@/components/ui';
import { Product, Size } from '@/types';
import { FC, useState } from 'react';
import { ProductQuantity } from '../product-quantity';
import { ProductSizes } from '../product-sizes';

type ProductBySlugPageProps = {
  product: Product;
};

export const ProductAddToCart: FC<ProductBySlugPageProps> = ({ product }) => {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);

    if (!size) return;
    console.log({ size, quantity });
  };

  return (
    <>
      <ProductSizes
        availableSizes={product.sizes}
        selectedSize={size}
        onSizeChange={setSize}
      />

      {posted && !size && (
        <span className="fade-in text-sm text-red-700">
          Size is required !
        </span>
      )}

      <ProductQuantity quantity={quantity} onQuantityChange={setQuantity} />

      <Button className="max-md:w-full md:px-32" onClick={addToCart}>
        Add to cart
      </Button>
    </>
  );
};
