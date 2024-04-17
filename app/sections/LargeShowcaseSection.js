import ShowCase from "../components/showcase/LargeShowcase.js";
import ShowcaseContainer from "../components/showcase/LargeShowcaseContainer.js";
import Calendar from "@/public/img/Calendar.JPG";
import Home from "@/public/img/Home.JPG";

export default function LargeShowcaseSection() {
  const images = [
    {
      src: Calendar,
      alt: "EasyTracking",
      title: "Easy Tracking",
      description: "to be added"
    },
    {
      src: Home,
      alt: "to be added",
      title: "to be added",
      description: "to be added"
    }
  ];

  return (
    <section className="w-full max-w-screen-md mx-auto">
      <ShowcaseContainer>
        {images.map((image, index) => (
          <ShowCase 
            key={index} 
            imageSource={image.src} 
            imageAlt={image.alt} 
            showcaseTitle={image.title} 
            showcaseDescription={image.description} 
          />
        ))}
      </ShowcaseContainer>
    </section>
  );
}