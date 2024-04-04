"use client";

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
    </motion.footer>
  );
}