import styles from "./SlideCustom.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCustom = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: false,
		slidesToShow: 1,
		speed: 500,
	};

	return (
		<Slider {...settings}>
			<div className={styles.slide}>
				<img src="/lft.png" alt="here" />
			</div>
			<div className={styles.slide}>
				<img src="/lft.png" alt="here" />
			</div>
			<div className={styles.slide}>
				<img src="/lft.png" alt="here" />
			</div>
			<div className={styles.slide}>
				<img src="/lft.png" alt="here" />
			</div>
			<div className={styles.slide}>
				<img src="/lft.png" alt="here" />
			</div>
		</Slider>
	);
};

export default SlideCustom;
