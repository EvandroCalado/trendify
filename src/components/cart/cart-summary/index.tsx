'use client';

import { Button } from '@/components/ui';
import { useCartStore } from '@/stores/cart';
import { currencyFormat } from '@/utils';
import { useEffect, useState } from 'react';
import { CartSummarySkeleton } from '../cart-summary-skeleton';

export const CartSummary = () => {
  const { getSummaryInfo } = useCartStore((state) => state);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <CartSummarySkeleton />;
  }

  return (
    <>
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="flex items-center justify-between text-sm">
        <span>No. Products</span>
        <span>{getSummaryInfo().totalProductsInCart}</span>
      </div>
      <div>
        <div className="flex items-center justify-between text-sm">
          <span>Subtotal</span>
          <span>{currencyFormat(getSummaryInfo().subTotal)}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>Sales Tax(15%)</span>
          <span>{currencyFormat(getSummaryInfo().tax)}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>Shipping</span>
          <span>Free</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-lg font-semibold">
        <span>Total</span>
        <span>{currencyFormat(getSummaryInfo().total)}</span>
      </div>
      <Button as={'a'} href="/checkout/address">
        Delivery
      </Button>
    </>
  );
};
