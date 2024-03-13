import Image from "next/image";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Feature from "@/components/Feature";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <main>
        <Hero />
        <LogoCloud />
        <Feature />
        <Stats />
        <CTA />
      </main>
    </div>
  );
}
