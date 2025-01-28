// import { redirect } from "next/navigation";
import { HomeHeader } from "@/components/home/home-header";
import { HomeBanner } from "@/components/home/home-banner";
import { HomeFilter } from "@/components/home/home-filter";
import { HomeProducts } from "@/components/home/home-products";

export default function Page() {
  // redirect("/home");

  return (
    <div>
      <HomeHeader />
      <HomeBanner />
      <HomeFilter />
      <HomeProducts />
    </div>
  );
}
