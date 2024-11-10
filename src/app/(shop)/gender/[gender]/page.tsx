import { getPaginatedProducts } from '@/actions/products';
import { ProductsGrid } from '@/components/products';
import { Pagination, Title } from '@/components/ui';
import { Gender } from '@prisma/client';
import { notFound, redirect } from 'next/navigation';

type GenderPageProps = {
  params: {
    gender: string;
  };
  searchParams: {
    page?: number;
  };
};

const GenderPage = async ({ params, searchParams }: GenderPageProps) => {
  const { gender } = await params;

  const { page } = await searchParams;

  const { products, totalPages } = await getPaginatedProducts({
    page,
    gender: gender as Gender,
  });

  if (products.length === 0) return redirect('/');

  const productsByCategory = products.filter(
    (product) => product.gender === gender,
  );

  if (productsByCategory.length === 0) notFound();

  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col px-5">
      <Title
        title={gender}
        subtitle={`Discover the latest trends to ${gender}s`}
      />

      <ProductsGrid products={productsByCategory} />

      <Pagination totalPages={totalPages} />
    </section>
  );
};

export default GenderPage;
