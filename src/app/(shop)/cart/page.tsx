import { ProductQuantity } from '@/components/product';
import { Button, Separator, Title } from '@/components/ui';
import { initialData } from '@/seeds';
import { IconChevronLeft } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const CartPage = () => {
  if (productsInCart.length === 0) redirect('/empty');

  return (
    <section className="mx-auto w-full max-w-screen-xl flex-1 gap-5 px-5">
      <Title title="Cart" />

      <Link
        href="/cart"
        className="flex w-max items-center text-sm font-semibold [&>svg]:transition-all [&>svg]:duration-150 [&>svg]:hover:-ml-1 [&>svg]:hover:mr-1 [&>svg]:hover:text-blue-700"
      >
        <IconChevronLeft size={18} />
        Continue shopping
      </Link>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-5 md:gap-16">
        {/* cart items */}
        <div className="flex flex-col md:col-span-3">
          {productsInCart.map((product) => (
            <div key={product.slug} className="mb-5 flex gap-5 text-sm">
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                width={100}
                height={100}
                className="rounded max-md:hidden"
              />

              <div className="flex w-full justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold">{product.title}</h3>

                  <div className="flex items-end gap-5">
                    <ProductQuantity quantity={3} />
                    <button className="border-b-[1px] border-zinc-200 transition-all duration-150 hover:border-zinc-900">
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}

          <Separator className="my-5 bg-zinc-300 md:hidden" />
        </div>

        {/* summary */}
        <div className="flex h-max flex-col justify-between gap-8 rounded-xl bg-white p-7 shadow-xl md:col-span-2">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="flex items-center justify-between text-sm">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="test-sm flex items-center justify-between">
            <span>Sales Tax</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Subtotal</span>
            <span>$245</span>
          </div>

          <Button as={'a'} href="/checkout/address">
            Delivery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
