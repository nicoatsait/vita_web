import Image from "next/image";

export default function ShowCase({ imageSource, imageAlt, showcaseTitle, showcaseDescription }) {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={imageSource}
        alt={imageAlt}
        className="object-contain"
      />
      <div className="absolute bottom-[10%] left-[10%] p-4">
        <h2 className="text-white text-lg">{showcaseTitle}</h2>
        <p className="text-white">{showcaseDescription}</p>
      </div>
    </div>
  );
}