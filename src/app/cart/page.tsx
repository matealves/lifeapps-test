"use client";

import { HomeFooter } from "@/components/home/home-footer";
import { HomeHeader } from "@/components/home/home-header";
import { ProductCartItem } from "@/components/ui/product-cart-item";
import { ResumeCartItem } from "@/components/ui/resume-cart";
import { SearchInput } from "@/components/ui/search-input";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCart = localStorage.getItem("cart_shopping");
    if (getCart) setProducts(JSON.parse(getCart));

    setLoading(false);
  }, []);

  const handleRemoveItem = (productId: string) => {
    const updatedCart = products.filter((item) => item.id !== productId);
    localStorage.setItem("cart_shopping", JSON.stringify(updatedCart));
    setProducts(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleRemoveAllItems = () => {
    localStorage.setItem("cart_shopping", JSON.stringify([]));
    setProducts([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updatedCart = products.map((item) =>
      item.id === productId ? { ...item, qtd: newQuantity } : item
    );
    setProducts(updatedCart);
    localStorage.setItem("cart_shopping", JSON.stringify(updatedCart));
  };

  const subtotal = products.reduce(
    (acc, item) => acc + (item.promotional_price || item.price) * item.qtd,
    0
  );

  const total = subtotal + 27.9;

  return (
    <div className="">
      <HomeHeader>
        <SearchInput />
      </HomeHeader>

      <div className="flex w-full justify-center">
        <p className="font-bold text-gray-600 mt-4 text-lg tracking-wider w-full max-w-screen-2xl px- ml-10">
          Carrinho
        </p>
      </div>

      <div className="min-h-[90vh] flex flex-col md:flex-row lg:flex-row lg:justify-center md:justify-center items-center md:items-start lg:items-start">
        {loading && (
          <p className="w-full flex justify-center mt-16 text-gray-500 text-sm">
            Carregando...
          </p>
        )}
        {!loading && !products.length && (
          <p className="w-full flex justify-center mt-16 text-gray-500 text-sm">
            Seu carrinho está vazio.
          </p>
        )}

        {!loading && !!products.length && (
          <>
            <div className="flex flex-col gap-6 lg:w-[60vw] mx-10 mt-6 my-12 lg:mb-36">
              {products.map((product, index) => (
                <ProductCartItem
                  key={index}
                  product={product}
                  onRemove={handleRemoveItem}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </div>

            <div className="mb-28 md:mt-6 lg:mt-6 md:my-12 lg:my-12">
              <ResumeCartItem subtotal={subtotal} total={total} onClearCart={handleRemoveAllItems}/>
            </div>
          </>
        )}
      </div>

      <HomeFooter />
    </div>
  );
}
