export type ProductCategory =
  | "dana"
  | "kuzu"
  | "tavuk"
  | "hazir"
  | "sarkuteri"
  | "izgaralik";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  image: string;
  featured?: boolean;
};

export type Category = {
  id: ProductCategory;
  title: string;
  description: string;
  image: string;
};

export type Campaign = {
  id: string;
  title: string;
  description: string;
  contents: string[];
  image: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  label: string;
};
