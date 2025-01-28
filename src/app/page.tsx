import { redirect } from "next/navigation";
import { HomeHeader } from "@/components/home/home-header";
import { HomeBanner } from "@/components/home/home-banner";

export default function Page() {
  // redirect("/home");

  return (
    <div>
      <HomeHeader />
      <HomeBanner />
    </div>
  );
}
