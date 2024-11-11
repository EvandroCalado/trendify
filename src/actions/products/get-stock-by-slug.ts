'use server';

import { prisma } from '@/utils';

type GetStockBySlugProps = {
  slug: string;
};

export const getStockBySlug = async ({ slug }: GetStockBySlugProps) => {
  try {
    const product = await prisma.product.findFirst({
      select: {
        inStock: true,
      },
      where: {
        slug,
      },
    });

    if (!product) return 0;

    return product.inStock;
  } catch (error) {
    throw new Error('Error getting stock by slug', { cause: error });
  }
};
