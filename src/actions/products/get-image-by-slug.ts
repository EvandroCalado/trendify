'use server';

import { prisma } from '@/utils';

type GetImageBySlugProps = {
  slug: string;
};

export const getImageBySlug = async ({ slug }: GetImageBySlugProps) => {
  try {
    const product = await prisma.product.findFirst({
      select: {
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

    return product.images.map((image) => image.url);
  } catch (error) {
    throw new Error('Error getting image by slug', { cause: error });
  }
};
