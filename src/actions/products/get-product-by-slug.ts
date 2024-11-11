'use server';

import { productMapper } from '@/mappers/products';
import { prisma } from '@/utils';

type getProductBySlugProps = {
  slug: string;
};

export const getProductBySlug = async ({ slug }: getProductBySlugProps) => {
  try {
    const product = await prisma.product.findFirst({
      include: {
        images: {
          select: {
            url: true,
          },
        },
      },
      where: {
        slug,
      },
    });

    if (!product) return null;

    return {
      ...productMapper(product),
    };
  } catch (error) {
    throw new Error('Error getting product by slug', { cause: error });
  }
};
