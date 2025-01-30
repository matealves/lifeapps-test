import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

type Props = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  discount_percentage: number | boolean;
  promotional_price: number | boolean;
};

export const ProductIndividual = ({
  id,
  image,
  name,
  description,
  price,
  discount_percentage,
  promotional_price,
}: Props) => {
  const handleClickAddToCart = () => {};

  return (
    <div className="flex mt-20 justify-center min-h-[80vh] w-full">
      <div className="w-full max-w-screen-2xl flex justify-center flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start">
        <div className="relative h-96 w-96 flex justify-center items-center">
          <img src={image} className="h-full w-full object-cover" alt={name} />

          {discount_percentage && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-4 py-2 text-sm font-bold">
              {discount_percentage}% OFF
            </div>
          )}
        </div>

        <div className="w-96 mb-24 md:mb-0 lg:mb-0 md:ml-28 lg:ml-36 pt-8 flex flex-col justify-between h-96">
          <div className="">
            <div className="flex justify-between w-full">
              <p className="font-bold text-xl mb-2">{name}</p>
              <FontAwesomeIcon
                icon={faHeart}
                className="size-6 text-gray-400 cursor-pointer"
              />
            </div>

            <div
              className={`${
                promotional_price
                  ? "line-through text-sm opacity-70"
                  : "text-2xl font-bold text-orange-500"
              }`}
            >
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>

            {promotional_price && (
              <div className="text-2xl font-bold text-orange-500">
                {promotional_price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            )}

            <p className="mt-6 mb-2 text-lg font-semibold">Descrição</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>

          <button
            onClick={handleClickAddToCart}
            className="uppercase bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-md"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};
