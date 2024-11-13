'use client';

import { Button } from '@/components/ui';
import { useCartStore } from '@/stores/cart';
import { currencyFormat } from '@/utils';
import { useEffect, useState } from 'react';
import { CartSummarySkeleton } from '../cart-summary-skeleton';

export const CartSummary = () => {
  const { getSummaryInfo } = useCartStore((state) => state);

  const { subTotal, tax, total, totalProductsInCart } = getSummaryInfo();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <CartSummarySkeleton />;
  }

  if (totalProductsInCart === 0) return null;

  return (
    <div className="flex h-max w-full flex-[2] flex-col justify-between gap-4 rounded-xl bg-white p-7 shadow-xl">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="flex items-center justify-between text-sm">
        <span>No. Products</span>
        <span>{totalProductsInCart}</span>
      </div>
      <div>
        <div className="flex items-center justify-between text-sm">
          <span>Subtotal</span>
          <span>{currencyFormat(subTotal)}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>Sales Tax(15%)</span>
          <span>{currencyFormat(tax)}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-lg font-semibold">
        <span>Total</span>
        <span>{currencyFormat(total)}</span>
      </div>
      <Button as={'a'} href="/checkout/address">
        Delivery
      </Button>
    </div>
  );
};
