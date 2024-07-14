import BannerSignUp from "@/components/organism/BannerSignUp";
import Category from "@/components/organism/Category";
import Clients from "@/components/organism/Clients";
import FeaturedJobs from "@/components/organism/FeaturedJobs";
import Hero from "@/components/organism/Hero";
import LatestJobs from "@/components/organism/LatestJobs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen absolute top-0 -z-10"></div>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image src="/images/pattern.png" alt="/images/pattern.png" fill />
      </div>
      <div className="px-32">
        <Hero />
        <Clients />
        <Category />
        <BannerSignUp />
        <FeaturedJobs />
        <LatestJobs />
      </div>
    </>
  );
}
