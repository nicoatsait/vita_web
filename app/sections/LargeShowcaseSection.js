import ShowCase from "../components/showcase/LargeShowcase.js";
import ShowcaseContainer from "../components/showcase/LargeShowcaseContainer.js";
import Calendar from "@/public/img/Calendar.png";
import Home from "@/public/img/Home.png";
import Add from "@/public/img/Add.png"
import Register from "@/public/img/Register.png"
import Main from "@/public/img/Main.png"

export default function LargeShowcaseSection() {
  const images = [
    {
      scr: Main,
      alt:"when you open the app"
    },
    {
      scr: Register,
      alt: "make an account"
    },
    {
      src: Calendar,
      alt: "EasyTracking",
    },
    {
      src: Home,
      alt: "Home",
    },
    {
      src: Add,
      alt: "add",
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
          />
        ))}
      </ShowcaseContainer>
    </section>
  );
}