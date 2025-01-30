export default function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center animate-fadeIn">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900">
          Compra realizada!
        </h2>
        <p className="text-gray-600 mt-2">
          Seu pedido foi processado com sucesso.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition hidden"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
