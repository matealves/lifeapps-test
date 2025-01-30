"use client";

import { HomeFooter } from "@/components/home/home-footer";
import { HomeHeader } from "@/components/home/home-header";
import { SearchInput } from "@/components/ui/search-input";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="">
      <HomeHeader>
        <SearchInput />
      </HomeHeader>

      {loading && (
        <p className="min-h-[62vh] text-center mt-16">Carregando...</p>
      )}

      {/* {!loading && product && (
        <ProductIndividual
          image={product.image}
          name={product.name}
          id={product.id}
          price={product.price}
          description={product.description}
          discount_percentage={product.discount_percentage ?? false}
          promotional_price={product.promotional_price ?? false}
        />
      )} */}

      <HomeFooter />
    </div>
  );
}
