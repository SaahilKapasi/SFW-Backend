"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoImage from "../../../public/images/sfw3.png";
import SubscriptionForm from "@/components/SubscriptionForm";
import VolunteerForm from "@/components/VolunteerForm";
import wandImage from "../../../public/images/sfw4.png";
import sfwImage from "../../../public/images/sfw2.png";

export default function GetInvolvedPage() {
  const fadeInVariant = {
    visible: { opacity: 1, transition: { duration: 3 } },
    hidden: { opacity: 0 },
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    if (inView1) controls1.start("visible");
    else controls1.start("hidden");
    if (inView2) controls2.start("visible");
    else controls2.start("hidden");
    if (inView3) controls3.start("visible");
    else controls3.start("hidden");
    if (inView4) controls4.start("visible");
    else controls4.start("hidden");
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    inView1,
    inView2,
    inView3,
    inView4,
  ]);

  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current !== null) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="h-screen bg-[#6EC0E5] flex flex-col items-center justify-center gap-4 p-5"
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={fadeInVariant}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F457E]">
              Become a member today!
            </h1>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1F457E] mt-2">
              Join our community:
            </h2>
          </div>
          <Image
            src={logoImage}
            width={150}
            height={150}
            alt="logo"
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[275px] md:h-[275px]"
          />
        </div>
        <button
          onClick={scrollToNextSection}
          className="bg-[#6091D9] hover:bg-[#487bb5] text-white w-3/4 sm:w-2/3 md:w-1/2 lg:w-[670px] h-24 sm:h-32 md:h-40 lg:h-[180px] rounded-3xl flex items-center justify-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl transition duration-300 ease-in-out"
        >
          Get Involved!
        </button>
      </motion.div>

      <motion.div
        ref={nextSectionRef}
        className="bg-[#AED6F3] min-h-screen mx-auto p-5 md:p-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <VolunteerForm />
        <SubscriptionForm />
        <div className="absolute bottom-10 right-10">
          <Image
            src={wandImage}
            width={100}
            height={100}
            alt="wand"
            className="sm:w-[150px] sm:h-[150px]"
          />
        </div>
      </motion.div>

      <motion.div
        className="bg-[#4694DC] pt-5 pb-5 md:pt-10 md:pb-
        10 flex flex-col items-center justify-center"
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={fadeInVariant}
      >
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
          Contact Us
        </h1>
      </motion.div>
      <motion.div
        className="bg-[#97BDE7] flex flex-col items-center pb-10 px-5"
        ref={ref4}
        initial="hidden"
        animate={controls4}
        variants={fadeInVariant}
      >
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1F457E] text-center mt-10">
          studentsforwishes.uoft@gmail.com
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 mb-10">
          1-800-000 | @sfw.uoft
        </h2>
        <Image src={sfwImage} width={400} height={400} alt="logo" />
      </motion.div>
    </>
  );
}
