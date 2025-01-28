import Link from "next/link";

type Props = {
  image: string;
  name: string;
  price: number;
};

export const ProductItem = ({ image, name, price }: Props) => {
  return (
    <div className="flex flex-col w-64">
      <Link href="/">
        <div className="h-64 w-64 flex justify-center items-center">
          <img src={image} className="h-full w-full object-cover" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-lg m-1">{name}</div>
          <div className="">
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};
