import { HomeHeader } from "@/components/home/home-header";
import { HomeBanner } from "@/components/home/home-banner";
import { HomeProducts } from "@/components/home/home-products";
import { HomeFooter } from "@/components/home/home-footer";
import { SearchInput } from "@/components/ui/search-input";

export default function Page() {
  return (
    <div>
      <HomeHeader>
        <SearchInput />
      </HomeHeader>
      <HomeBanner />
      <HomeProducts />
      <HomeFooter />
    </div>
  );
}
