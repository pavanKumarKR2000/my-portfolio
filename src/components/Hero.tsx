"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AwesomeButton } from "react-awesome-button";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/avatar1.svg"
            height={200}
            width={200}
            alt="avatar1"
            className="pb-6"
          />
          <h2 className="uppercase text-2xl md:text-4xl font-bold">
            pavankumar k r
          </h2>
          <p className="text-md md:text-xl text-white">Frontend Engineer</p>
          <p className="text-md md:text-lg text-white">
            pavankavalakodu@gmail.com
          </p>
          <p className="text-md md:text-lg text-white">Bangalore,India</p>
          <div className="flex items-center gap-4 py-3">
            <Link
              href="https://www.linkedin.com/in/pavankumar-k-r-032509198/"
              target="_blank"
            >
              <AwesomeButton type="primary">
                <Linkedin size={25} />
              </AwesomeButton>
            </Link>
            <Link href="https://github.com/pavanKumarKR2000" target="_blank">
              <AwesomeButton type="primary">
                <Github size={25} />
              </AwesomeButton>
            </Link>
            <Link href="https://twitter.com/PavanKavalakodu" target="_blank">
              <AwesomeButton type="primary">
                <Twitter size={25} />
              </AwesomeButton>
            </Link>
          </div>
          <Link
            href={
              "https://drive.google.com/file/d/11dKhCIlc6sBRyGsAnSk6lCmBgMcNR6NO/view?usp=sharing"
            }
            target="_blank"
          >
            <AwesomeButton type="secondary">Download CV</AwesomeButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
