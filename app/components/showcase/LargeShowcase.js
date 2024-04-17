import Image from "next/image";

export default function ShowCase({ imageSource, imageAlt, showcaseTitle, showcaseDescription }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={imageSource}
        alt={imageAlt}
        className="object-contain"
      />
      <div className="absolute bottom-0 left-0 p-4">
        <h2 className="text-white text-lg">{showcaseTitle}</h2>
        <p className="text-white">{showcaseDescription}</p>
      </div>
    </div>
  );
}