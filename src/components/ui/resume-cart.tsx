import { useState } from "react";
import SuccessModal from "./modal";
import { useRouter } from "next/navigation";

type Props = {
  subtotal: number;
  total: number;
  onClearCart: () => void;
};

export const ResumeCartItem = ({ subtotal, total, onClearCart }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleClickFinalizeOrder = () => {
    setShowModal(true);

    setTimeout(() => {
      onClearCart();
      router.push("/home");
    }, 5000);
  };

  return (
    <div className="flex flex-col p-4 w-[70vw] min-w-[250px] md:w-[250px] lg:w-[350px]">
      <div className="uppercase font-semibold mb-8 text-gray-600 tracking-wider">
        Resumo
      </div>

      <div className="flex justify-between text-gray-500 text-sm tracking-wider">
        <p>Subtotal de produtos</p>
        <p>
          {subtotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="flex justify-between text-gray-500 text-sm my-4 mb-6 tracking-wider">
        <p>Entrega</p>
        <p>R$ 27,90</p>
      </div>

      <div className="flex justify-between text-gray-600 border-t border-gray-200 pt-3 tracking-wider uppercase font-semibold">
        <p>Total</p>
        <p>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      <button
        onClick={handleClickFinalizeOrder}
        className="finish-order uppercase bg-green-500 hover:bg-green-600 text-white py-2 rounded-md mt-8 text-xs"
      >
        Finalizar pedido
      </button>

      <button
        onClick={onClearCart}
        className="uppercase bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-md mt-6 text-xs"
      >
        Limpar carrinho
      </button>
    </div>
  );
};
