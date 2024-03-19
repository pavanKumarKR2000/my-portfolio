import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Parallax from "@/components/Parallax";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-[100px] md:sdpace-y-0 pb-6 ">
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}
