'use client'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';
import logoImage from '../../public/images/sfw2.png';
import starImage from '../../public/images/shooting-star.png';
import TeamSlider from '../components/TeamSlider';

export default function HomePage() {
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
    if (inView1) controls1.start('visible');
    else controls1.start('hidden');
    if (inView2) controls2.start('visible');
    else controls2.start('hidden');
    if (inView3) controls3.start('visible');
    else controls3.start('hidden');
    if (inView4) controls4.start('visible');
    else controls4.start('hidden');
  }, [controls1, controls2, controls3, controls4, inView1, inView2, inView3, inView4]);

  return (
    <>
      <motion.div
        className="bg-[#6EC0E5] min-h-screen flex flex-col justify-center items-center p-5"
        ref={ref1}
        initial="hidden"
        animate={controls1}
        variants={fadeInVariant}
      >
        <h1 className="font-bold text-4xl md:text-8xl text-[#1F457E] text-center">Students For Wishes UofT</h1>
        <h2 className="mt-5 text-xl md:text-3xl mb-10 text-center">The Happiness Campaign: Granting Wishes, Spreading Smiles</h2>
        <Image src={logoImage} width={250} height={250} alt="logo" priority />
      </motion.div>
      <motion.div
        className="bg-[#C6E1F4] pt-5 pb-5 md:pt-10 md:pb-10 flex flex-col items-center justify-center"
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={fadeInVariant}
      >
        <h1 className="font-bold text-3xl md:text-8xl text-[#1F457E] text-center">Who Are We?</h1>
      </motion.div>
      <motion.div
        className="bg-[#61BBE2] flex flex-col md:flex-row items-center justify-center p-5 gap-5"
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={fadeInVariant}
      >
        <div className="text-center">
          <p className="text-md md:text-lg">
            Make-A-Wish Canada is an independently operating affiliate of Make-A-Wish international. We create life-changing wishes for children with critical illnesses...
          </p>
        </div>
        <Image src={starImage} width={200} height={200} alt="star" priority />
      </motion.div>
      <motion.div
        className="bg-[#C6E1F4] min-h-screen flex flex-col items-center justify-center"
        ref={ref4}
        initial="hidden"
        animate={controls4}
        variants={fadeInVariant}
      >
        <h1 className="font-bold text-3xl md:text-8xl text-[#1F457E] text-center mb-5">Meet the Team</h1>
        <TeamSlider />
      </motion.div>
    </>
  );
}
