"use client";

import { useState, useEffect } from "react";
import { ProductItem } from "../ui/product-item";
import { getProducts, ProductResponse } from "@/utils/api";
import { Product } from "@/types/product";

export const HomeProducts = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Omit<
    ProductResponse,
    "data"
  > | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(page);
        setProducts(data.data);
        setPagination({
          first: data.first,
          prev: data.prev,
          next: data.next,
          last: data.last,
          pages: data.pages,
          items: data.items,
        });
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="h-screen-2xl m-8 flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-screen-2xl justify-center flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-14">
          {products.map(({ id, name, image, price }) => (
            <ProductItem key={id} image={image} name={name} price={price} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        {/* <p className="text-center text-sm">
          Exibindo itens do {products.length} de{" "}
          {pagination?.items} itens.
        </p> */}
        <p className="text-center mt-3 text-xs text-gray-500">
          Página {page} de {pagination?.pages}
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={!pagination?.prev}
            className="px-2 py-1 bg-orange-500 text-white rounded disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700 text-xs"
          >
            Página Anterior
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!pagination?.next}
            className="px-2 py-1 bg-orange-500 text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700 rounded-md text-xs"
          >
            Próxima Página
          </button>
        </div>
      </div>
    </div>
  );
};
