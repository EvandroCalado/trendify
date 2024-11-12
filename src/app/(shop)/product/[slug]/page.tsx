export const revalidate = 604800; // 60 * 60 * 24 * 7 = 604800 seconds = 1 week

import { getProductBySlug } from '@/actions/products';
import {
  ProductAddToCart,
  ProductSlideDesktop,
  ProductSlideMobile,
  ProductStockLabel,
} from '@/components/product';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type GenerateMetadataProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: GenerateMetadataProps): Promise<Metadata> => {
  const { slug } = await params;

  const product = await getProductBySlug({ slug });

  return {
    title: product?.title ?? 'Product not found',
    description: product?.description ?? 'Product not found',
    openGraph: {
      title: product?.title ?? 'Product not found',
      description: product?.description ?? 'Product not found',
      images: [`/products/${product?.images[1]}`],
    },
  };
};

type ProductBySlugPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductBySlugPage: FC<ProductBySlugPageProps> = async ({ params }) => {
  const { slug } = await params;

  const productBySlug = await getProductBySlug({ slug });

  if (!productBySlug) notFound();

  return (
    <section className="mx-auto grid w-full max-w-screen-xl flex-1 grid-cols-1 md:grid-cols-2 md:px-5 lg:gap-16">
      {/* slide */}
      <ProductSlideDesktop slug={slug} />
      <ProductSlideMobile slug={slug} />

      {/* details */}
      <div className="w-full space-y-5 px-5">
        <h1 className="font-title text-xl font-bold">{productBySlug.title}</h1>

        {/* in stock */}
        <ProductStockLabel slug={productBySlug.slug} />

        {/* price */}
        <p className="text-lg font-semibold">${productBySlug.price}</p>

        {/* add to cart */}
        <ProductAddToCart product={productBySlug} />

        {/* description */}
        <h3 className="text-sm font-bold">Description</h3>
        <p className="text-sm">{productBySlug.description}</p>
      </div>
    </section>
  );
};

export default ProductBySlugPage;
