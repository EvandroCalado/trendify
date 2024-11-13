import { CartProducts, CartSummary } from '@/components/cart';
import { Title } from '@/components/ui';

const CartPage = () => {
  return (
    <section className="mx-auto w-full max-w-screen-xl flex-1 gap-5 px-5">
      <Title title="Cart" />

      <div className="mt-5 flex gap-16">
        <CartProducts />

        <CartSummary />
      </div>
    </section>
  );
};

export default CartPage;
