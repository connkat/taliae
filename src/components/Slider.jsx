import { testimonials } from "../data";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			{testimonials.map((testimonial) => {
				return <p key={testimonials[testimonial]}>{testimonial}</p>;
			})}
		</Slider>
	);
}
