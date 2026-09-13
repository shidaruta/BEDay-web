import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Pillars } from "@/components/Pillars";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <HowItWorks />
        <Features />
        <WhoItsFor />
        <Team />
      </main>
    </>
  );
}
