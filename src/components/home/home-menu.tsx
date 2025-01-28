import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";
import { FilterItem } from "../ui/filter-item";

type Props = {
  closeAction?: () => void;
};

export const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="md:hidden lg:hidden fixed right-0 top-0 h-screen p-6 z-10 transition-transform bg-white w-2/3">
      <div className="flex justify-end">
        {/* <Logo size={80} /> */}

        <div
          onClick={closeAction}
          className="cursor-pointer flex justify-end size-12 rounded-full"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="size-7 text-orange-500 bg-white"
          />
        </div>
      </div>

      <div className="my-6">
        <SearchInput />
      </div>

      <div className="flex flex-col">
        <FilterItem label="Todos os Produtos" active />
        <FilterItem label="Camisetas" />
        <FilterItem label="Calças" />
        <FilterItem label="Tênis" />
      </div>
    </div>
  );
};
