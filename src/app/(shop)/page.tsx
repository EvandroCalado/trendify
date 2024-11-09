import { getPaginatedProducts } from '@/actions/products';
import { ProductsGrid } from '@/components/products';
import { Pagination, Title } from '@/components/ui';
import { redirect } from 'next/navigation';

type props = {
  searchParams: {
    page?: number;
  };
};

const ShopPage = async ({ searchParams }: props) => {
  const { page } = await searchParams;

  const { products, totalPages } = await getPaginatedProducts({
    page,
  });

  if (products.length === 0) return redirect('/');

  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      <Title title="Shop" subtitle="Discover the latest trends" />

      <ProductsGrid products={products} />

      <Pagination totalPages={totalPages} />
    </section>
  );
};

export default ShopPage;
