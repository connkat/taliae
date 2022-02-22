import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p>
          “Talia did a great job with our 1 year old daughter! Ava really
          enjoyed playing with her and it made our evening much more relaxing”
        </p>
      </div>
      <div>
        <p>
          "Talia is truly THE BEST! She is incredibly
          responsible, way beyond her years, and yet still knows how to have fun
          with kids and engage them. She is also very patient…and trust me, my
          two kids require a whole lot of patience! If she can handle the energy
          of my 4 and 5.5 year olds, then she can handle just about anything!
          Having Talia as your helper will certainly make your kids happier and
          your life a whole lot easier!"
        </p>
      </div>
    </Slider>
  );
}
