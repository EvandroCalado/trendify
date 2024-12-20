export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Type = 'shirts' | 'pants' | 'hoodies' | 'hats';
export type Gender = 'men' | 'women' | 'kid' | 'unisex';

export type Product = {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  // type: Type;
  gender: Gender;
  categoryId: string;
};

export type ProductInCart = {
  id: string;
  slug: string;
  title: string;
  price: number;
  size: Size;
  quantity: number;
  image: string;
};
