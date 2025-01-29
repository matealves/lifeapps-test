"use client";

import { useState, useEffect } from "react";
import {
  getProducts,
  getProductsByCategory,
  getProductsByPrice,
  ProductResponse,
} from "@/utils/api";
import { Product } from "@/types/product";
import { HomeFilter } from "./home-filter";
import { ProductsGrid } from "../ui/products-grid";

export const HomeProducts = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Omit<
    ProductResponse,
    "data"
  > | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] =
    useState<string>("Todos os Produtos");
  const [orderBy, setOrderBy] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        let data: ProductResponse | null;

        if (selectedCategory === "Todos os Produtos") {
          if (orderBy !== "") {
            data = await getProductsByPrice(orderBy as "asc" | "desc", page);
          } else {
            data = await getProducts(page);
          }
        } else {
          data = await getProductsByCategory(
            selectedCategory,
            orderBy !== "" ? (orderBy as "asc" | "desc") : null,
            page
          );
        }

        if (data) {
          setProducts(data.data);
          setPagination({
            first: data.first,
            prev: data.prev,
            next: data.next,
            last: data.last,
            pages: data.pages,
            items: data.items,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, selectedCategory, orderBy]);

  if (loading) return <p>Carregando...</p>;

  return (
    <>
      <HomeFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />

      <ProductsGrid
        products={products}
        pages={true}
        setPage={setPage}
        page={page}
        pagination={pagination}
      />
    </>
  );
};
