"use client";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    
    <motion.footer
      className="flex flex-col items-center w-full py-12 bg-zinc-900/45"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-base font-medium text-gray-300">
        &copy; {new Date().getFullYear()} All rights reserved. ©
      </p>
      <a href="mailto:VitaCapstone2024@gmail.com">
        <button className="border flex flex-row items-center justify-center gap-2 relative px-8 py-3 bg-[#00111C] rounded-sm border-zinc-600 text-[#C6AB84]">
          <IoMailOutline size={30} className="text-[#ADD8E6]"/>
          <p className="text-lg font-medium text-[#ADD8E6]">email us about bugs or concerns </p>
        </button>
      </a>
    </motion.footer>
  );
}