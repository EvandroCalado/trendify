import { Separator, Title } from '@/components/ui';
import { initialData } from '@/seeds/seed';
import { IconChevronLeft, IconCreditCard } from '@tabler/icons-react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

type props = {
  params: {
    id: string;
  };
};

const OrdersByIdPage: FC<props> = async ({ params }) => {
  const { id } = await params;

  return (
    <section className="mx-auto w-full max-w-screen-xl flex-1 gap-5 px-5">
      <Title title={`Order ${id}`} />

      <Link
        href="/"
        className="flex w-max items-center text-sm font-semibold [&>svg]:transition-all [&>svg]:duration-150 [&>svg]:hover:-ml-1 [&>svg]:hover:mr-1 [&>svg]:hover:text-blue-700"
      >
        <IconChevronLeft size={18} />
        Back home
      </Link>

      <div
        className={clsx(
          'my-4 flex w-max items-center gap-2 rounded-lg px-16 py-2 text-sm font-semibold text-white',
          {
            'bg-red-700': true,
          },
        )}
      >
        <IconCreditCard />
        <span>Pending payment</span>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-5 md:gap-16">
        {/* items */}
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
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">{product.title}</h3>
                  <span>Quantity 3</span>
                  <span className="font-semibold">
                    Subtotal ${product.price * 3}
                  </span>
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
        <div className="flex h-max flex-col justify-between gap-4 rounded-xl bg-white p-7 shadow-xl md:col-span-2">
          <h2 className="text-xl font-semibold">Order Delivery</h2>

          <div className="text-sm">
            <p className="text-base font-semibold">John Doe</p>
            <p>123 Main St</p>
            <p>New York, NY</p>
            <p>10001</p>
            <p>United States</p>
            <p>123-456-7890</p>
          </div>

          <Separator className="my-2" />

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

          <div
            className={clsx(
              'my-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white',
              {
                'bg-red-700': true,
              },
            )}
          >
            <IconCreditCard />
            <span>Pending payment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersByIdPage;
