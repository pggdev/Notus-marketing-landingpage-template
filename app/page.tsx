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
import { Cta } from "./section/cta";
import { Footer } from "./section/footer";
import { Dashboard } from "./section/dashboard";
import { Topgrid } from "./section/topgrid";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <Topgrid />
      <Integrate />
      <Feature />
      <UseCases />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Security />
      <Faqs />
      <Cta />
      <Footer />

    </div>
  );
}
