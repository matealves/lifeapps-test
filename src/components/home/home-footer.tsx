import { Logo } from "../ui/logo";
import Link from "next/link";

export const HomeFooter = () => {
  return (
    <footer className="flex flex-col bg-gray-100 h-40 items-center">
      <div className="mt-8 mb-5">
        <Logo size={120} />
      </div>

      <div className="text-gray-400 text-xs">
        <Link href="https://www.linkedin.com/in/mateusalvesds/" target="_blank">
          © Developed by Mateus Alves.
        </Link>
      </div>
    </footer>
  );
};
