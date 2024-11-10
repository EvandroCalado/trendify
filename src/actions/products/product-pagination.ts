'use server';

import { productMapper } from '@/mappers/products';
import { Product } from '@/types';
import { prisma } from '@/utils/prisma';
import { Gender } from '@prisma/client';

type GetPaginatedProductsResponse = {
  totalPages: number;
  products: Product[];
};

type GetPaginatedProductsProps = {
  page?: number;
  take?: number;
  gender?: Gender;
};

export const getPaginatedProducts = async ({
  page = 1,
  take = 12,
  gender,
}: GetPaginatedProductsProps): Promise<GetPaginatedProductsResponse> => {
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
      where: {
        gender,
      },
    });

    if (!products) return { totalPages: 1, products: [] };

    const totalCount = await prisma.product.count({
      where: {
        gender,
      },
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      totalPages: totalPages,
      products: productMapper(products),
    };
  } catch (error) {
    throw new Error('Failed to fetch products', { cause: error });
  }
};
