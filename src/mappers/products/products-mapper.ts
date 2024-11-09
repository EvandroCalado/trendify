/* eslint-disable @typescript-eslint/no-explicit-any */

import { Gender, Product, Size } from '@/types';

type ProductsDataBase = ({
  images: {
    url: string;
  }[];
} & {
  id: string;
  title: string;
  description: string;
  slug: string;
  price: number;
  inStock: number;
  tags: string[];
  sizes: Size[];
  gender: Gender;
  categoryId: string;
})[];

export const productMapper = (products: ProductsDataBase): Product[] => {
  return products.map((product: any) => ({
    ...product,
    images: product.images.map((image: any) => image.url),
  }));
};
