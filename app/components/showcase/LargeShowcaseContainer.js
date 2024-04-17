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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ 
        display: "block", 
        color: "#ADD8E6", 
        fontSize: '50px', 
        zIndex: '1',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ 
        display: "block", 
        color: "#ADD8E6", 
        fontSize: '50px', 
        zIndex: '1',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
    >
      &#10094;
    </div>
  );
}