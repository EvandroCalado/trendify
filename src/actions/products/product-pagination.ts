'use server';

import { productMapper } from '@/mappers/products';
import { prisma } from '@/utils/prisma';

type PaginationProps = {
  page?: number;
  take?: number;
};

export const getPaginatedProducts = async ({
  page = 1,
  take = 12,
}: PaginationProps) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
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
