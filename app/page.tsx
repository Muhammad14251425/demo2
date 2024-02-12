import Image from "next/image";
import Navbar from "@/app/components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import SecoundPart from "./components/SecoundPart";
import ThirdPart from "./components/ThirdPart";
import Pricing from "./components/Pricing";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <SecoundPart />
        <ThirdPart />
        <Pricing />
        <Footer />
    </main>
  );
}

// #5A5A5A