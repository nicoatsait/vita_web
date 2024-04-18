import Image from "next/image";

export default function ShowCase({ imageSource, imageAlt }) {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={imageSource}
        alt={imageAlt}
        className="object-contain"
      />
    </div>
  );
}