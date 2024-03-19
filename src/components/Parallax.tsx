"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Parallax = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".rocket-1",
          start: "top 80%",
          end: "top 0",
          scrub: true,
          markers: false,
        },
      })
      .to(".rocket-1", { y: "-1000", duration: "1" })
      .to(".rocket-2", { y: "-400", duration: "1" }, "<")
      .to(".rocket-3", { y: "-1000", duration: "1" }, "<")
      .to(".rocket-4", { y: "-400", duration: "1" }, "<");
  });

  return (
    <div className="hidden md:block">
      <Image
        src="/rocket.svg"
        height={50}
        width={50}
        alt="line"
        className="absolute top-[85vh] right-[300px] rocket-1"
      />
      <Image
        src="/rocket.svg"
        height={50}
        width={50}
        alt="line"
        className="absolute top-[90vh] right-[400px] rocket-2"
      />
      <Image
        src="/rocket.svg"
        height={50}
        width={50}
        alt="line"
        className="absolute top-[85vh] left-[400px] rocket-3"
      />
      <Image
        src="/rocket.svg"
        height={50}
        width={50}
        alt="line"
        className="absolute top-[90vh] left-[500px] rocket-4"
      />
    </div>
  );
};

export default Parallax;
