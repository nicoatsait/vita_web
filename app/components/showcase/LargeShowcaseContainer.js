import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ShowcaseContainer({ children }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <div className="relative w-full aspect-[9/19.5] overflow-hidden">
      <Slider {...settings}>
        {children.map((child, index) => (
          <div key={index} className="w-full h-full flex-none">
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
}