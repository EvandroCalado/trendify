'use client';

import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

type ProductsGridItemProps = {
  product: Product;
};

export const ProductsGridItem: FC<ProductsGridItemProps> = ({ product }) => {
  const [displayImage, setIsDisplayImage] = useState(product.images[0]);

  return (
    <div className="fade-in mx-auto w-full max-w-[350px] overflow-hidden rounded-md">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={`${product.title}`}
          width={500}
          height={500}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full rounded object-cover"
          onMouseEnter={() => setIsDisplayImage(product.images[1])}
          onMouseLeave={() => setIsDisplayImage(product.images[0])}
        />
      </Link>

      <div className="flex flex-col py-4">
        <Link
          href={`/product/${product.slug}`}
          className="transition-all hover:text-blue-700"
        >
          {product.title}
        </Link>
        <span className="text-sm font-bold">${product.price}</span>
      </div>
    </div>
  );
};
