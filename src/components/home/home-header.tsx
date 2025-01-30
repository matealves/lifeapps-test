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
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HomeHeader = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-center index-">
      <header className="flex justify-between items-center p-6 border-b-2 border-gray-50 h-20 w-full max-w-screen-2xl">
        <div className="">
          <Logo size={80} />
        </div>
        <div className="my-6 flex items-center text-orange-500">
          <div className="hidden md:block lg:block">{children}</div>

          <div className="text-center hidden md:block lg:block">
            <FontAwesomeIcon icon={faUser} className="size-6 mx-4" />
          </div>
          <Link href="/cart">
            <div className="text-center pl-2" title="Carrinho">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="size-6 ml-2 mr-4 cursor-pointer"
              />
            </div>
          </Link>

          
        <div
          onClick={() => setShowMenu(true)}
          className="cursor-pointer lg:hidden md:hidden ml-5"
        >
          <FontAwesomeIcon icon={faBars} className="size-6 text-orange-500" />
        </div>
        </div>


        {showMenu && <HomeMenu closeAction={() => setShowMenu(false)} />}
      </header>
    </div>
  );
};
