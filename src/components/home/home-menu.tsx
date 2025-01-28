import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";

type Props = {
  closeAction?: () => void;
};

export const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="md:hidden lg:hidden fixed inset-0 p-6 z-10 h-20 transition-transform">
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

      <div className="flex flex-col items-center">
        <NavItem href="/home" label="Todos os Produtos" />
        <NavItem href="/home" label="Tênis" />
        <NavItem href="/home" label="Camisetas" />
        <NavItem href="/home" label="Calças" />
      </div>
    </div>
  );
};
