"use client";

import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { animateScroll, scroller } from "react-scroll";

export default function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const scrollOptions = {
    duration: 800,
    delay: 100,
    smooth: true,
  };

  const handleScrollToTop = () => {
    animateScroll.scrollToTop(scrollOptions);

    setIsHamburgerOpen(false);
  };

  const handleScrollToDownload = () => {
    const newScrollOptions = {
      ...scrollOptions,
      offset: -75,
    };

    // Assuming "downloadSection" is the ID of the section where you want to scroll
    scroller.scrollTo("downloadSection", newScrollOptions);

    setIsHamburgerOpen(false);
  };

  const handleScrollToLargeShowcase = () => {
    const newScrollOptions = {
      ...scrollOptions,
      offset: -75,
    };
  
    // Assuming "largeShowcaseSection" is the ID of the section where you want to scroll
    scroller.scrollTo("largeShowcaseSectionElement", newScrollOptions);
  
    setIsHamburgerOpen(false);
  };

  const handleScrollToAboutUs = () => {
    const newScrollOptions = {
      ...scrollOptions,
      offset: -75,
    };

    // Assuming "aboutUsSection" is the ID of the section where you want to scroll
    scroller.scrollTo("aboutUsSection", newScrollOptions);

    setIsHamburgerOpen(false);
  };

  const handleOnHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="bg-zinc-950 h-16 fixed top-0 w-full z-10">
      <div className="flex justify-center items-center w-full h-full bg-zinc-600/50 sm:px-4">
        <div className="sm:flex hidden flex-row justify-between items-center w-full sm:w-[64rem] h-full">
          <div className="flex items-center">
            <Image src="/img/logo12.png" alt="logo" width={64} height={64} className="filter brightness-250"/>
            <button
              className="font-bold text-xl text-gray-50"
              onClick={handleScrollToTop}
            >
              Vita
            </button>
          </div>
          
          <div className="flex flex-row gap-4">
            <button
              className="font-medium text-lg text-gray-50 sm:hidden block"
              onClick={handleScrollToTop}
            >
              Home
            </button>
            <button
              className="font-medium text-lg text-gray-50"
              onClick={handleScrollToTop}
            >
              Download
            </button>
            <button
              className="font-medium text-lg text-gray-50"
              onClick={handleScrollToLargeShowcase}
            >
              App
            </button>
            <button
              className="font-medium text-lg text-gray-50"
              onClick={handleScrollToAboutUs}
            >
              About us
            </button>
          </div>
        </div>

        <div className="sm:hidden flex justify-center w-full h-full">
          <div className="fixed top-4 right-4 z-10">
            {isHamburgerOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <IoClose
                  className="text-gray-50 hover:cursor-pointer"
                  size={40}
                  onClick={handleOnHamburgerClick}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <IoMenu
                  className="text-gray-50 hover:cursor-pointer"
                  size={40}
                  onClick={handleOnHamburgerClick}
                />
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {isHamburgerOpen && (
                <motion.div
                  className=" relative inset-y-16 w-full h-fit bg-zinc-950 -z-10"
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: -128, opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  exit={{ y: -128, opacity: 0 }}
                >
                  <div className=" flex flex-col items-center justify-center bg-zinc-900/45 divide-y shadow-md divide-zinc-700 border-y border-zinc-700 h-fit w-full">
                    <motion.button
                      initial={{ opacity: 0, x: -128 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="font-medium text-lg text-gray-50 w-full h-full py-3"
                      onClick={handleScrollToTop}
                    >
                      Home
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -128 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.05,
                      }}
                      className="font-medium text-lg text-gray-50 w-full h-full py-3"
                      onClick={handleScrollToDownload}
                    >
                      Download
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -128 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                      className="font-medium text-lg text-gray-50 w-full h-full py-3"
                      onClick={handleScrollToLargeShowcase}
                    >
                      App
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, x: -128 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.15,
                      }}
                      className="font-medium text-lg text-gray-50 w-full h-full py-3"
                      onClick={handleScrollToAboutUs}
                    >
                      About us
                    </motion.button>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
