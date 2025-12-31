import Image from "next/image";
import { Navbar } from "./section/navbar";
import { Hero } from "./section/hero";
import { Feature } from "./section/features";
import { UseCases } from "./section/useCases";
import { Benefits } from "./section/benefits";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <UseCases />
      <Benefits />
    </div>
  );
}
