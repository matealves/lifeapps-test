"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../ui/logo";
import { useState } from "react";
import { HomeMenu } from "./home-menu";
import { NavItem } from "../nav/nav-item";
import { SearchInput } from "../ui/search-input";
import Link from "next/link";

export const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-center">
      <header className="flex justify-between items-center p-6 border-b-2 border-gray-50 h-20 w-full max-w-screen-2xl">
        <div className="">
          {/* <div className="lg:hidden"> */}
          <Logo size={80} />
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="cursor-pointer lg:hidden md:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="size-6 text-orange-500" />
        </div>

        {/* <div className=":hidden flex gap-6">
          <NavItem href="/home" label="Todos os Produtos" />
          <NavItem href="/home" label="Tênis" />
          <NavItem href="/home" label="Camisetas" />
          <NavItem href="/home" label="Calças" />
        </div> */}

        <div className="my-6 hidden md:flex lg:flex items-center text-orange-500">
          <SearchInput />
          
          <div className="text-center">
            <FontAwesomeIcon
              icon={faUser}
              className="size-6 mx-4 cursor-pointer"
            />
          </div>
          <Link href="/">
            <div className="text-center pl-2">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="size-6 ml-2 mr-4 cursor-pointer"
              />
            </div>
          </Link>
        </div>

        {showMenu && <HomeMenu closeAction={() => setShowMenu(false)} />}
      </header>
    </div>
  );
};
