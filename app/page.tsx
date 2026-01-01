import Image from "next/image";
import { Navbar } from "./section/navbar";
import { Hero } from "./section/hero";
import { Feature } from "./section/features";
import { UseCases } from "./section/useCases";
import { Benefits } from "./section/benefits";
import { Testimonials } from "./section/testimonials";
import { Integrate } from "./section/howitworks";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Integrate />
      <Feature />
      <UseCases />
      <Benefits />
      <Testimonials />
    </div>
  );
}
