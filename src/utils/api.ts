import axios from "axios";
import { Product } from "@/types/product";
import { removeAcento } from "./removeAcentos";

type SortType = "asc" | "desc";

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

export const getProduct = async (id: number): Promise<Product | null> => {
  try {
    const result = await req.get(`/products/${id}`);
    return result.data;
  } catch (error) {
    console.error(`Erro ao buscar produto com ID ${id}:`, error);
    return null;
  }
};

export const getProducts = async (
  page: number = 1,
  limit: number = 8
): Promise<ProductResponse | null> => {
  try {
    const result = await req.get(`/products?_page=${page}&_per_page=${limit}`);
    return result.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return null;
  }
};

export const searchProductsByName = async (
  query: string
): Promise<Product[]> => {
  const response = await req.get(`/products`);
  return response.data.filter((product: Product) =>
    removeAcento(product.name).includes(removeAcento(query))
  );
};

// Solução para ordenar corretamente utilizando múltiplas propriedades
export const getProductsByPrice = async (
  sort: SortType = "asc",
  page: number = 1,
  limit: number = 8
): Promise<ProductResponse | null> => {
  try {
    // Buscar todos os produtos (sem paginação)
    const response = await req.get(`/products`);
    const allProducts: Product[] = response.data;

    // Ordenar combinando promotional_price e price
    allProducts.sort((a, b) => {
      const priceA = a.promotional_price ?? a.price;
      const priceB = b.promotional_price ?? b.price;
      return sort === "asc" ? priceA - priceB : priceB - priceA;
    });

    // Aplicar paginação manualmente
    const startIndex = (page - 1) * limit;
    const paginatedData = allProducts.slice(startIndex, startIndex + limit);

    // Criar estrutura de resposta paginada
    return {
      first: 1,
      prev: page > 1 ? page - 1 : null,
      next: startIndex + limit < allProducts.length ? page + 1 : null,
      last: Math.ceil(allProducts.length / limit),
      pages: Math.ceil(allProducts.length / limit),
      items: allProducts.length,
      data: paginatedData,
    };
  } catch (error) {
    console.error("Erro ao buscar produtos ordenados por preço:", error);
    return null;
  }
};

// Solução para ordenar corretamente utilizando múltiplas propriedades
export const getProductsByCategory = async (
  category: string,
  sort: SortType | null = null,
  page: number = 1,
  limit: number = 8
): Promise<ProductResponse | null> => {
  try {
    // Buscar todos os produtos sem paginação
    const response = await req.get(`/products?category=${category}`);
    const allProducts: Product[] = response.data;

    // Se houver um critério de ordenação, aplicá-lo
    if (sort) {
      allProducts.sort((a, b) => {
        const priceA = a.promotional_price ?? a.price;
        const priceB = b.promotional_price ?? b.price;
        return sort === "asc" ? priceA - priceB : priceB - priceA;
      });
    }

    // Aplicar paginação manualmente
    const startIndex = (page - 1) * limit;
    const paginatedData = allProducts.slice(startIndex, startIndex + limit);

    // Criar estrutura de resposta paginada
    return {
      first: 1,
      prev: page > 1 ? page - 1 : null,
      next: startIndex + limit < allProducts.length ? page + 1 : null,
      last: Math.ceil(allProducts.length / limit),
      pages: Math.ceil(allProducts.length / limit),
      items: allProducts.length,
      data: paginatedData,
    };
  } catch (error) {
    console.error("Erro ao buscar produtos por categoria:", error);
    return null;
  }
};
