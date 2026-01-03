import Image from "next/image";
import { Navbar } from "./section/navbar";
import { Hero } from "./section/hero";
import { Feature } from "./section/features";
import { UseCases } from "./section/useCases";
import { Benefits } from "./section/benefits";
import { Testimonials } from "./section/testimonials";
import { Integrate } from "./section/howitworks";
import { Pricing } from "./section/pricing";
import { Security } from "./section/benefits/security";
import { Faqs } from "./section/FAQ";

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
      <Pricing />
      <Security />
      <Faqs />
    </div>
  );
}
