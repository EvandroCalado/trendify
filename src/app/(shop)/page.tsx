import { getPaginatedProducts } from '@/actions/products';
import { ProductsGrid } from '@/components/products';
import { Title } from '@/components/ui';

type props = {
  searchParams: {
    page?: number;
  };
};

const ShopPage = async ({ searchParams }: props) => {
  const { page } = await searchParams;

  const products = await getPaginatedProducts({ page });

  return (
    <section className="mx-auto w-full max-w-screen-xl px-5">
      <Title title="Shop" subtitle="Discover the latest trends" />

      <ProductsGrid products={products} />
    </section>
  );
};

export default ShopPage;
