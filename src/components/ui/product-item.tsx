import Link from "next/link";

type Props = {
  image: string;
  name: string;
  price: number;
  discount_percentage?: number;
  promotional_price?: number;
};

export const ProductItem = ({
  image,
  name,
  price,
  discount_percentage,
  promotional_price,
}: Props) => {
  return (
    <div className="flex flex-col w-72">
      <Link href="/">
        <div className="relative h-72 w-72 flex justify-center items-center">
          <img src={image} className="h-full w-full object-cover" alt={name} />

          {discount_percentage && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-4 py-2 text-sm font-bold">
              {discount_percentage}% OFF
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-lg m-1">{name}</div>

          <div
            className={`${
              promotional_price ? "line-through text-sm opacity-70" : "text-lg"
            }`}
          >
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </div>

          {promotional_price && (
            <div className="text-green-600 font-bold text-lg">
              {promotional_price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
