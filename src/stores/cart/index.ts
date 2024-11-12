import type { ProductInCart } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartState = {
  cart: ProductInCart[];
  getTotalProductsInCart: () => number;
  addToProductCart: (product: ProductInCart) => void;
  updateProductQuantity: (product: ProductInCart, quantity: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalProductsInCart: () => {
        const { cart } = get();

        return cart.reduce((total, product) => total + product.quantity, 0);
      },

      addToProductCart: (product) => {
        const { cart } = get();

        const productInCart = cart.some(
          (cartProduct) =>
            cartProduct.id === product.id && cartProduct.size === product.size,
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const newCart = cart.map((cartProduct) => {
          if (
            cartProduct.id === product.id &&
            cartProduct.size === product.size
          ) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        });

        set({ cart: newCart });
      },

      updateProductQuantity: (product, quantity) => {
        const { cart } = get();

        const newCart = cart.map((cartProduct) => {
          if (
            cartProduct.id === product.id &&
            cartProduct.size === product.size
          ) {
            return {
              ...cartProduct,
              quantity,
            };
          }

          return cartProduct;
        });

        set({ cart: newCart });
      },
    }),
    {
      name: 'trendify-cart-storage',
    },
  ),
);
