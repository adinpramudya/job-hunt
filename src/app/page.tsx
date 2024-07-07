import BannerSignUp from "@/components/layouts/organism/BannerSignUp";
import Category from "@/components/layouts/organism/Category";
import Clients from "@/components/layouts/organism/Clients";
import FeaturedJobs from "@/components/layouts/organism/FeaturedJobs";
import Hero from "@/components/layouts/organism/Hero";
import LatestJobs from "@/components/layouts/organism/LatestJobs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-32">
      <Hero />
      <Clients />
      <Category />
      <BannerSignUp />
      <FeaturedJobs />
      <LatestJobs />
    </div>
  );
}
