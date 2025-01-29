import { HomeFooter } from "@/components/home/home-footer";
import { HomeHeader } from "@/components/home/home-header";
import { ProductsGrid } from "@/components/ui/products-grid";
import { SearchInput } from "@/components/ui/search-input";
import { searchProductsByName } from "@/utils/api";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};
export default async function Page({ searchParams }: Props) {
  if (!searchParams.q) redirect("/");

  const productsSearch = await searchProductsByName(searchParams.q);

  return (
    <div className="">
      <HomeHeader>
        <SearchInput defaultValue={searchParams.q} />
      </HomeHeader>

      <div className="flex justify-center mt-5 mx-10">
        <p className="text-sm text-gray-500 w-full max-w-screen-2xl">
          Exibindo resultados da busca:{" "}
          <span className="font-bold">{searchParams.q}.</span>
        </p>
      </div>

      <ProductsGrid products={productsSearch} pages={false} />

      <HomeFooter />
    </div>
  );
}
