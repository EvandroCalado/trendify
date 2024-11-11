/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender, Size } from '@/types';

type ProductDataBase = {
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
};

export const productMapper = (product: ProductDataBase) => {
  return {
    ...product,
    images: product.images.map((image) => image.url),
  };
};
