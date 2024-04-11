import Image from "next/image";

import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

export default function ShowCase({
  imageSource,
  imageAlt,
  showcaseTitle,
  showcaseDescription,

}) {
  return (
    <div className="relative w-full h-full flex flex-col justify-end flex-none">
      <div className="absolute w-full h-full brightness-75 -z-10">
        <Image
          className="object-cover lg"
          src={imageSource}
          fill={true}
          alt={imageAlt}
          layout="fill"
        />
      </div>

      <div className="flex flex-col gap-5 items-center pb-10 px-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-50/90 font-semibold text-2xl md:text-2xl text-center">
            {showcaseTitle}
          </p>
          <p className="text-gray-50/90 font-medium text-sm md:text-base text-center">
            {showcaseDescription}
          </p>
        </div>
        
      </div>
    </div>
  );
}
