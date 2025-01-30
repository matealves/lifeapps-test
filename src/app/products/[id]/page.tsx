"use client";

import { HomeHeader } from "@/components/home/home-header";
import { HomeFooter } from "@/components/home/home-footer";
import { SearchInput } from "@/components/ui/search-input";
import { ProductIndividual } from "@/components/ui/product-individual";
import { useEffect, useState } from "react";
import { getProduct } from "@/utils/api";
import { usePathname } from "next/navigation";
import { Product } from "@/types/product";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product>();

  const pathname = usePathname();
  const idProduct = Number(pathname.replace("/products/", ""));

  useEffect(() => {
    const getCurrentProduct = async () => {
      setLoading(true);

      try {
        const data = await getProduct(idProduct);
        if (data) setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentProduct();
  }, []);

  return (
    <div className="">
      <HomeHeader>
        <SearchInput />
      </HomeHeader>

      {loading && (
        <p className="min-h-[62vh] text-center mt-16">Carregando...</p>
      )}

      {!loading && product && (
        <ProductIndividual
          image={product.image}
          name={product.name}
          id={product.id}
          price={product.price}
          description={product.description}
          discount_percentage={product.discount_percentage ?? false}
          promotional_price={product.promotional_price ?? false}
        />
      )}

      <HomeFooter />
    </div>
  );
}
