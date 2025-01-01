import AboutMe from "@/components/About-me";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center">
        <Hero />
        <AboutMe />
        <Projects />

        <ScrollToTopBtn />
      </main>

      <Footer />
    </>
  );
}
