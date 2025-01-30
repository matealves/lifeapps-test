import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { FilterItem } from "../ui/filter-item";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  closeAction?: () => void;
};

export const HomeMenu = ({ closeAction }: Props) => {
  return (
    <div className="md:hidden lg:hidden fixed right-0 top-0 h-screen p-6 z-10 transition-transform bg-white w-2/3">
      <div className="flex justify-end">
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

      <div className="flex flex-col gap-4 text-gray-500 font-bold">
        <Link href="/">Todos os Produtos</Link>
        <Link
          href={`/search?q=${encodeURIComponent("Camiseta")}`}
          onClick={closeAction}
        >
          Camiseta
        </Link>
        <Link
          href={`/search?q=${encodeURIComponent("Calça")}`}
          onClick={closeAction}
        >
          Calça
        </Link>
        <Link
          href={`/search?q=${encodeURIComponent("Tênis")}`}
          onClick={closeAction}
        >
          Tênis
        </Link>
      </div>
    </div>
  );
};
