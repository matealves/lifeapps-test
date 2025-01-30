"use client"

import { Product } from "@/types/product";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  product: Product;
  onRemove: (productId: string) => void;
  onQuantityChange: (productId: string, newQuantity: number) => void;
};

export const ProductCartItem = ({
  product,
  onRemove,
  onQuantityChange,
}: Props) => {
  const [qtd, setQtd] = useState<number>(product.qtd || 1);

  const handleIncreaseQtd = () => {
    setQtd((prevQtd) => {
      const newQtd = prevQtd + 1;
      onQuantityChange(product.id, newQtd);
      return newQtd;
    });
  };

  const handleDecreaseQtd = () => {
    if (qtd > 1) {
      setQtd((prevQtd) => {
        const newQtd = prevQtd - 1;
        onQuantityChange(product.id, newQtd);
        return newQtd;
      });
    }
  };

  return (
    <div className="flex border border-gray-200 justify-between items-center px-4 max-w-[600px]">
      <div className="relative h-28 w-36 flex justify-center items-center">
        <img
          src={product.image}
          className="h-full w-full object-cover overflow-hidden"
          alt={product.name}
        />
        {product.discount_percentage && (
          <div className="absolute top-1 left-1 bg-red-500 text-white px-1 py-1 text-xs font-bold">
            {product.discount_percentage}% OFF
          </div>
        )}
      </div>

      <div className="py-4 pl-4">
        <div className="flex justify-between">
          <p className="font-bold">{product.name}</p>
          <FontAwesomeIcon
            icon={faTrash}
            title="Remover"
            className="size-4 text-red-500 cursor-pointer"
            onClick={() => onRemove(product.id)}
          />
        </div>

        <p className="text-xs my-3 max-w-96">{product.description}</p>

        <div className="flex justify-between items-end">
          <div className="flex bg-gray-200">
            <div
              className="py-1 px-3 flex justify-center items-center font-semi-bold cursor-pointer select-none"
              onClick={handleDecreaseQtd}
              title="Diminuir"
            >
              -
            </div>
            <div className="py-1 px-2 flex justify-center items-center text-xs">
              {qtd}
            </div>
            <div
              className="py-1 px-3 flex justify-center items-center font-semi-bold cursor-pointer select-none"
              onClick={handleIncreaseQtd}
              title="Aumentar"
            >
              +
            </div>
          </div>

          <div>
            <div
              className={`${
                product.promotional_price
                  ? "line-through text-xs opacity-70 text-red-500"
                  : "text-sm font-bold"
              }`}
            >
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>

            {product.promotional_price && (
              <div className="text-sm font-bold">
                {product.promotional_price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

