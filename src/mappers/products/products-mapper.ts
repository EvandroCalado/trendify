/* eslint-disable @typescript-eslint/no-explicit-any */
export const productMapper = (products: any) => {
  return products.map((product: any) => ({
    ...product,
    images: product.images.map((image: any) => image.url),
  }));
};
