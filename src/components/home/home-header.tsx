"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../ui/logo";
import { useEffect, useState } from "react";
import { HomeMenu } from "./home-menu";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HomeHeader = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const getCart = localStorage.getItem("cart_shopping");
    if (getCart) {
      const cartItems = JSON.parse(getCart);
      setCartCount(cartItems.length);
    }
  };

  useEffect(() => {
    updateCartCount();

    // Listener para detectar mudanças no carrinho
    const handleStorageChange = () => updateCartCount();
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <header className="flex justify-between items-center p-6 border-b-2 border-gray-50 h-20 w-full max-w-screen-2xl">
        <div>
          <Logo size={80} />
        </div>
        <div className="my-6 flex items-center text-orange-500">
          <div className="hidden md:block lg:block">{children}</div>

          <div className="text-center hidden md:block lg:block">
            <FontAwesomeIcon icon={faUser} className="size-6 mx-4" />
          </div>
          <Link href="/cart">
            <div className="text-center pl-2 relative" title="Carrinho">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="size-6 ml-2 mr-4 cursor-pointer"
              />

              {cartCount > 0 && (
                <div className="absolute bg-orange-500 text-white -top-3 border-2 border-white right-1 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartCount}
                </div>
              )}
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
