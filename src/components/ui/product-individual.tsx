import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Product } from "@/types/product";
import { useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  product: Product;
};

export const ProductIndividual = ({ product }: Props) => {
  const [added, setAdded] = useState(false);

  const handleClickAddToCart = (item: Product) => {
    const getCart = localStorage.getItem("cart_shopping");
    let cart: Product[] = getCart ? JSON.parse(getCart) : [];

    const itemIndex = cart.findIndex((obj: Product) => obj.id === item.id);

    if (itemIndex !== -1) {
      cart[itemIndex].qtd = (cart[itemIndex].qtd || 1) + 1;
    } else {
      cart.push({ ...item, qtd: 1 });
    }

    localStorage.setItem("cart_shopping", JSON.stringify(cart));

    // Disparando o evento para atualizar o ícone do carrinho
    window.dispatchEvent(new Event("cartUpdated"));
    setAdded(true);
  };

  return (
    <div className="flex mt-20 justify-center min-h-[80vh] w-full">
      <div className="w-full max-w-screen-2xl flex justify-center flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start">
        <div className="relative h-96 w-96 flex justify-center items-center">
          <img
            src={product.image}
            className="h-full w-full object-cover"
            alt={product.name}
          />

          {product.discount_percentage && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-4 py-2 text-sm font-bold">
              {product.discount_percentage}% OFF
            </div>
          )}
        </div>

        <div className="w-96 mb-24 md:mb-0 lg:mb-0 md:ml-20 lg:ml-36 pt-8 flex flex-col justify-between h-96">
          <div className="">
            <div className="flex justify-between w-full">
              <p className="font-bold text-xl mb-2">{product.name}</p>
              <FontAwesomeIcon
                icon={faHeart}
                className="size-6 text-gray-400 cursor-pointer"
              />
            </div>

            <div
              className={`${
                product.promotional_price
                  ? "line-through text-sm opacity-70"
                  : "text-2xl font-bold text-orange-500"
              }`}
            >
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>

            {product.promotional_price && (
              <div className="text-2xl font-bold text-orange-500">
                {product.promotional_price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            )}

            <p className="mt-6 mb-2 text-lg font-semibold">Descrição</p>
            <p className="text-sm text-gray-500">{product.description}</p>

            <Link href="/home">
              <p className="mt-6 text-sm text-gray-500 font-bold text-end underline">
                Continuar comprando →
              </p>
            </Link>

            <Link href="/cart">
              <p className="mt-5 text-sm text-orange-500 font-bold text-end underline">
                Ir para o carrinho →
              </p>
            </Link>
          </div>

          <button
            onClick={() => handleClickAddToCart(product)}
            className={`${
              added ? "bg-blue-500" : "bg-orange-500 hover:bg-orange-400"
            } uppercase  text-white py-3 rounded-md flex justify-center items-center`}
            disabled={added ?? false}
          >
            {!added && <span className="">Adicionar ao carrinho</span>}
            {added && <span className="">Adicionado no carrinho</span>}
            <span className="">
              {added && (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="size-4 text-white ml-2"
                />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
