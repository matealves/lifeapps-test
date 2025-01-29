import { Product } from "@/types/product";
import { ProductItem } from "./product-item";
import { ProductResponse } from "@/utils/api";

type Props = {
  products: Product[];
  pages: boolean;
  setPage?: (value: number | ((prev: number) => number)) => void;
  page?: number;
  pagination?: Omit<ProductResponse, "data"> | null;
};

export const ProductsGrid = ({
  products,
  pages,
  setPage,
  page,
  pagination,
}: Props) => {
  return (
    <div className="h-screen-2xl m-8 flex flex-col justify-center items-center min-h-[62vh]">
      <div className="w-full max-w-screen-2xl justify-center flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
          {products.map(
            ({
              id,
              name,
              image,
              price,
              discount_percentage,
              promotional_price,
            }) => (
              <ProductItem
                key={id}
                image={image}
                name={name}
                price={price}
                discount_percentage={discount_percentage}
                promotional_price={promotional_price}
              />
            )
          )}
        </div>
      </div>

      {pages && setPage && page && (
        <div className="mt-20">
          <p className="text-center text-sm text-gray-600">
            Exibindo {products.length} itens.
          </p>

          <div className="flex justify-center items-center gap-4 mt-6 mb-10">
            <button
              onClick={() => setPage((prev: number) => Math.max(prev - 1, 1))}
              disabled={!pagination?.prev}
              className="px-4 py-2 font-bold bg-orange-500 text-white rounded disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700 text-xs"
            >
              {"<"}
            </button>
            <p className="text-xs text-gray-500">
              Página {page} de {pagination?.pages}
            </p>
            <button
              onClick={() => setPage((prev: number) => prev + 1)}
              disabled={!pagination?.next}
              className="px-4 py-2 font-bold bg-orange-500 text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700 rounded-md text-xs"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
