'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import fatimaImage from '../../../public/images/fatima.png';

export default function DonationsPage() {
  const goal = 15000;
  const amountRaised = 10000;
  const raisedPercentage = Math.min((amountRaised / goal) * 100, 100);

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: { 
      width: raisedPercentage + '%', 
      transition: { duration: 2, ease: "easeInOut" } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeInOut" } 
    },
  };


  return (
    <div className="bg-blue-100 min-h-screen p-5 flex items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-5">
        <div className="flex flex-col md:flex-row items-center text-center">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-blue-800">Our Current Project:</h1>
            <h2 className="text-xl font-bold text-blue-600 my-2">Fundraiser Name</h2>
            <div className="flex items-center my-4">
              <div className="text-blue-600 font-bold">${amountRaised} Raised</div>
              <div className="w-full bg-gray-200 rounded-full mx-3 my-4">
              <motion.div 
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" 
                variants={progressBarVariants}
                initial="hidden"
                animate="visible"
              />
            </div>
              <div className="text-blue-600 font-bold">${goal} Goal</div>
            </div>
            <p className="text-gray-600 px-6 md:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet ligula non est tincidunt feugiat vitae ac diam. Fusce a ultrices odio. Sed odio ante, suscipit et orci vitae, vestibulum laoreet dolor. Integer pharetra porta elementum...
            </p>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full my-4 transition-colors duration-200">
              Donate Now
            </button>
          </div>
          <motion.div className="md:w-1/2 mt-5 md:mt-0 ml-3" variants={imageVariants} initial="hidden" animate="visible">
            <Image src={fatimaImage} alt="Fatima" className="rounded-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}