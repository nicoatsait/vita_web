import ShowCase from "../components/showcase/LargeShowcase.js";
import ShowcaseContainer from "../components/showcase/LargeShowcaseContainer.js";
import Calendar from "@/public/img/Calendar.png";
import Home from "@/public/img/Home.png";
import Add from "@/public/img/Add.png"

export default function LargeShowcaseSection() {
  const images = [
    {
      src: Calendar,
      alt: "EasyTracking",
      title: "Easy Tracking",
      description: "Tracking your Meds has never been easier"
    },
    {
      src: Home,
      alt: "Home",
      title: "Place remainders easily",
      description: "place reminders easily "
    },
    {
      scr: Add,
      alt: "add",
      title: "Easily add Medication intake",
      description: ""
    }
  ];

  return (
    <section className="w-full max-w-screen-md mx-auto">
      <h1 className="text-3xl font-semibold text-gray-50 w-full">The App</h1>
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