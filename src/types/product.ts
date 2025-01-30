export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  discount_percentage?: number;
  promotional_price?: number;
  qtd: number;
};
