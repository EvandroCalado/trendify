import { ProductsGrid } from '@/components/products';
import { Title } from '@/components/ui';
import { initialData } from '@/seeds/seed';

const products = initialData.products;

const ShopPage = () => (
  <section className="container mx-auto px-5">
    <Title title="Shop" subtitle="Discover the latest trends" />

    <ProductsGrid products={products} />
  </section>
);

export default ShopPage;
