import {
  ProductQuantity,
  ProductSizes,
  ProductSlideDesktop,
  ProductSlideMobile,
} from '@/components/product';
import { Button } from '@/components/ui';
import { initialData } from '@/seeds';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const products = initialData.products;

const ProductBySlugPage: FC<Props> = async ({ params }) => {
  const { slug } = await params;

  const productBySlug = products.find((product) => product.slug === slug);

  if (!productBySlug) notFound();

  return (
    <section className="mx-auto grid w-full max-w-screen-xl grid-cols-1 md:grid-cols-2 md:px-5 lg:gap-16">
      {/* slide */}
      <ProductSlideDesktop
        images={productBySlug.images}
        title={productBySlug.title}
      />
      <ProductSlideMobile
        images={productBySlug.images}
        title={productBySlug.title}
      />

      {/* details */}
      <div className="w-full space-y-5 px-5">
        <h1 className="font-title text-xl font-bold">{productBySlug.title}</h1>
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
