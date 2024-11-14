'use client';

import { ProductQuantity } from '@/components/product';
import { Empty } from '@/components/ui';
import { useCartStore } from '@/stores/cart';
import { IconChevronLeft } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CartProductsSkeleton } from '../cart-products-skeleton';

export const CartProducts = () => {
  const {
    cart,
    updateProductQuantity,
    removeProductFromCart,
    getTotalProductsInCart,
  } = useCartStore((state) => state);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <CartProductsSkeleton />;
  }

  if (getTotalProductsInCart() === 0) {
    return (
      <div className="col-span-5 my-36 flex w-full items-center justify-center">
        <Empty />
      </div>
    );
  }

  return (
    <div className="mt-5 w-full flex-[3]">
      <Link
        href="/"
        className="mb-5 flex w-max items-center text-sm font-semibold [&>svg]:transition-all [&>svg]:duration-150 [&>svg]:hover:-ml-1 [&>svg]:hover:mr-1 [&>svg]:hover:text-blue-700"
      >
        <IconChevronLeft size={18} />
        Continue shopping
      </Link>

      {cart.map((product) => (
        <div
          key={`${product.slug}-${product.size}`}
          className="mb-5 flex gap-5 text-sm"
        >
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md max-sm:hidden"
          />

          <div className="flex w-full justify-between">
            <div className="space-y-2">
              <Link href={`/product/${product.slug}`}>
                <h3 className="cursor-pointer font-semibold duration-150 hover:text-blue-700">
                  {product.title} ({product.size})
                </h3>
              </Link>

              <div className="flex items-end gap-5">
                <ProductQuantity
                  quantity={product.quantity}
                  onQuantityChange={(quantity) =>
                    updateProductQuantity(product, quantity)
                  }
                />
                <button
                  className="border-b-[1px] border-zinc-200 transition-all duration-150 hover:border-zinc-900"
                  onClick={() => removeProductFromCart(product)}
                >
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
    </div>
  );
};
