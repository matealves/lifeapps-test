import axios from "axios";
import { Product } from "@/types/product";

export type ProductResponse = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Product[];
};

const req = axios.create({
  baseURL: "https://api-prova-frontend.solucoeslifeapps.com.br",
});

export const getProducts = async (
  page: number = 1,
  limit: number = 6
): Promise<ProductResponse> => {
  const result = await req.get(`/products?_page=${page}&_per_page=${limit}`);
  return result.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const result = await req.get(`/posts/${id}`);
  return result.data;
};
