import { Product } from '@/types';
import { FC } from 'react';
import { ProductsGridItem } from '../products-grid-item';

type ProductsProps = {
  products: Product[];
};

export const ProductsGrid: FC<ProductsProps> = ({ products }) => (
  <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    {products.map((product) => (
      <ProductsGridItem key={product.slug} product={product} />
    ))}
  </div>
);
