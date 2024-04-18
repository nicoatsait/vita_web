const IOS_DOWNLOAD_URL = "https://apps.apple.com/us/app/vita/id1582867127";
const ANDROID_DOWNLOAD_URL = "https://play.google.com/store/apps/details?id=com.vita";

import { FaApple, FaAndroid } from 'react-icons/fa';
import { motion } from "framer-motion";

/**
 * Represents the landing section of the main page.
 * @returns A landing section component .
 */
export default function LandingSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 h-screen">
      <motion.div
        className="flex flex-col justify-center items-center gap-4 group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="font-bold text-6xl text-gray-50 text-center">
          Vita
        </h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-bold text-3xl text-gray-50 text-center">
            A comprehensive tool for caregivers to monitor their<br /> patients or children&apos;s health.
          </h1>
          <p className="font-medium text-xl text-gray-400 text-center">
            Download now and start monitoring your loved ones&apos; health.
          </p>
        </div>
      </motion.div>
      
      <motion.div
        className="relative "
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
      >
        <motion.div
          className="absolute -inset-0.5 w-full h-full bg-[#ADD8E6] blur-md"
          animate={{
            rotate: [-2, 0, 2],
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{ repeat: Infinity, duration: 8, repeatType: "reverse" }}
        />
        <motion.div
          className="flex flex-row gap-4 group"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.25 }}
      >
          <a href={IOS_DOWNLOAD_URL} target="_blank" className='border flex flex-row items-center justify-center gap-2 relative px-8 py-3 bg-[#00111C] rounded-sm border-zinc-600'>
            <FaApple size={30} className="text-[#ADD8E6]" />
            <p className="font-medium text-lg text-[#ADD8E6]">iOS</p>
          </a>

          <a href={ANDROID_DOWNLOAD_URL} target="_blank" className='border flex flex-row items-center justify-center gap-2 relative px-8 py-3 bg-[#00111C] rounded-sm border-zinc-600'>
            <FaAndroid size={30} className="text-[#ADD8E6]" />
            <p className="font-medium text-lg text-[#ADD8E6]">Android</p>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}