import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  href: string;
  active?: boolean;
};

export const NavItem = ({ label, href, active }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`flex items-center gap-6 py-3 font-medium ${
        active ? "opacity-100 text-orange-500" : "opacity-50"
      } hover:opacity-100 hover:text-orange-500`}
    >
      <div className="text-md font-semibold">{label}</div>
    </Link>
  );
};
