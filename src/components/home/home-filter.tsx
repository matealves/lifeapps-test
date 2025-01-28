import { FilterItem } from "../ui/filter-item";
import { SelectOrderBy } from "../ui/select-order-by";

export const HomeFilter = () => {
  return (
    <div className="w-full h-12 md:h-24 lg:h-24 flex justify-center items-center md:border lg:border border-gray-100">
      <div className="flex justify-end md:justify-between lg:md:justify-between w-full max-w-screen-2xl mx-10">
        <div className="hidden md:flex lg:flex gap-2 ">
          <FilterItem label="Todos os Produtos" active />
          <FilterItem label="Camisetas" />
          <FilterItem label="Calças" />
          <FilterItem label="Tênis" />
        </div>

        <SelectOrderBy />
      </div>
    </div>
  );
};
