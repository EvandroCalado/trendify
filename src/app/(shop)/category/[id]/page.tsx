import { ProductsGrid } from '@/components/products';
import { Title } from '@/components/ui';
import { initialData } from '@/seeds';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = {
  params: {
    id: string;
  };
};

const products = initialData.products;

const CategoryByIdPage: FC<Props> = async ({ params }) => {
  const { id } = await params;

  const productsByCategory = products.filter(
    (product) => product.gender === id,
  );

  if (productsByCategory.length === 0) notFound();

  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      <Title title={id} subtitle={`Discover the latest trends to ${id}s`} />

      <ProductsGrid products={productsByCategory} />
    </section>
  );
};

export default CategoryByIdPage;
