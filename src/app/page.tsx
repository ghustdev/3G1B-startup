import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Blueprint } from "@/components/sections/Blueprint";
import { Portfolio } from "@/components/sections/Portfolio";
import { Partners } from "@/components/sections/Partners";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Partners />
      <About />
      <Blueprint />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
