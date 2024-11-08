'use server';

import { productMapper } from '@/mappers/products';
import { prisma } from '@/utils/prisma';

export const getPaginatedProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    if (!products) return [];

    return productMapper(products);
  } catch (error) {
    throw new Error('Failed to fetch products', { cause: error });
  }
};
