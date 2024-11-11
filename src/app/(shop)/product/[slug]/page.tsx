export const revalidate = 60 * 60 * 24 * 7; // 1 week

import { getProductBySlug } from '@/actions/products';
import {
  ProductQuantity,
  ProductSizes,
  ProductSlideDesktop,
  ProductSlideMobile,
  ProductStockLabel,
} from '@/components/product';
import { Button } from '@/components/ui';
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

        <ProductStockLabel slug={productBySlug.slug} />

        <p className="text-lg font-semibold">${productBySlug.price}</p>

        {/* sizes */}
        <ProductSizes
          availableSizes={productBySlug.sizes}
          selectedSize={productBySlug.sizes[0]}
        />

        {/* quantity */}
        <ProductQuantity quantity={5} />

        {/* button */}
        <Button className="max-md:w-full md:px-32">Add to cart</Button>

        {/* description */}
        <h3 className="text-sm font-bold">Description</h3>
        <p className="text-sm">{productBySlug.description}</p>
      </div>
    </section>
  );
};

export default ProductBySlugPage;
