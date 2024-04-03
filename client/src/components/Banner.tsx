import Slider from "react-slick";
const Banner = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			<img
				src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/134537-group-12314.png"
				alt=""
				className="w-full object-contain rounded-md"
			/>
			<img
				src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/134537-group-12314.png"
				alt=""
				className="w-full object-contain rounded-md"
			/>
			<img
				src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/134537-group-12314.png"
				alt=""
				className="w-full object-contain rounded-md"
			/>
			<img
				src="https://cdn.bookingcare.vn/fo/w1920/2023/11/02/134537-group-12314.png"
				alt=""
				className="w-full object-contain rounded-md"
			/>
		</Slider>
	);
};
export default Banner;
