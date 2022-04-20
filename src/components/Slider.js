import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  "Talia is a responsible and enthusiastic 9 year old girl. She hasassisted in looking after my children who are 6 and 3 when I work from home. My children love spending time with her as she has such a positive and patient attitude towards them. She ensures that my children tidy their toys prior to moving on to the next activity. She can manage the children with independence but on the other hand she is aware of her own limitations and knows when to seek parental assistance. We look forward to having her help us out more in the future.",
  "Talia is truly THE BEST! She is incredibly responsible, way beyond her years, and yet still knows how to have fun with kids and engage them. She is also very patient…and trust me, my two kids require a whole lot of patience! If she can handle the energy of my 4 and 5.5 year olds, then she can handle just about anything! Having Talia as your helper will certainly make your kids happier and your life a whole lot easier!",
  "Talia did a great job with our 1 year old daughter! Ava really enjoyed playing with her and it made our evening much more relaxing",
];

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
      {testimonials.map((testimonial) => {
        return (
          <div>
            <p>{testimonial}</p>
          </div>
        );
      })}
    </Slider>
  );
}
