import { FilterItem } from "../ui/filter-item";
import { SelectOrderBy } from "../ui/select-order-by";

type Props = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  orderBy: string;
  setOrderBy: (order: string) => void;
};

export const HomeFilter = ({ selectedCategory, setSelectedCategory, orderBy, setOrderBy }: Props) => {
  return (
    <div className="flex flex-col w-full h-12 md:h-24 lg:h-24 justify-center items-center mt-10">
      <div className="flex justify-end md:justify-center lg:justify-center w-full max-w-screen-2xl mx-10">
        <div className="hidden md:flex lg:flex gap-2">
          {["Todos os Produtos", "Camisetas", "Calças", "Tênis"].map((category) => (
            <FilterItem
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full max-w-screen-2x justify-end mt-4 mr-24">
        <SelectOrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
      </div>
    </div>
  );
};
