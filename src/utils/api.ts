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

export const getProduct = async (id: number): Promise<Product> => {
  const result = await req.get(`/posts/${id}`);
  return result.data;
};

export const getProducts = async (
  page: number = 1,
  limit: number = 8
): Promise<ProductResponse> => {
  const result = await req.get(`/products?_page=${page}&_per_page=${limit}`);
  return result.data;
};

export const getProductsByPrice = async (
  sort: 0 | 1 = 0,
  page: number = 1,
  limit: number = 8
): Promise<ProductResponse> => {
  const result = await req.get(
    `/products?_page=${page}&_per_page=${limit}&_sort=${
      sort === 0 ? "price" : "-price"
    }`
  );
  return result.data;
};

export const getProductsByCategory = async (
  category: string,
  sort: 0 | 1 | null = null,
  page: number = 1,
  limit: number = 8
): Promise<ProductResponse> => {
  const result = await req.get(
    `/products?category=${category}&_page=${page}&_per_page=${limit}${
      sort !== null ? (sort === 0 ? "&_sort=price" : "&_sort=-price") : ""
    }`
  );
  return result.data;
};
