import { FilterItem } from "../ui/filter-item";
import { SelectOrderBy } from "../ui/select-order-by";

export const HomeFilter = () => {
  return (
    <div className="flex flex-col w-full h-12 md:h-24 lg:h-24 justify-center items-center mt-10">
      <div className="flex justify-end md:justify-center lg:md:justify-center w-full max-w-screen-2xl mx-10">
        <div className="hidden md:flex lg:flex gap-2 ">
          <FilterItem label="Todos os Produtos" active />
          <FilterItem label="Camisetas" />
          <FilterItem label="Calças" />
          <FilterItem label="Tênis" />
        </div>
      </div>
      <div className="flex w-full max-w-screen-2x justify-end mt-4 mr-24">
        <SelectOrderBy />
      </div>
    </div>
  );
};
