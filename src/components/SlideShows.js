import styles from "./SlideShow.module.css";
import { useRef, useEffect } from "react";

const SlideShows = () => {
	const slideshow = useRef(null);
	const intervalSlideShow = useRef(null);
	const next = () => {
		// check if the slideshow has elements
		if (slideshow.current.children.length > 0) {
			// get first elements in the slideshow
			const firstElement = slideshow.current.children[0];
			const size = slideshow.current.children[0].offsetWidth;
			// set the transition for the slide show
			slideshow.current.style.transition = `300ms ease-out all`;
			// move slide
			slideshow.current.style.transform = `translateX(-${size}px)`;

			const transition = () => {
				slideshow.current.style.transition = `none`;
				slideshow.current.style.transform = `translateX(0)`;

				// get first element send to the end
				slideshow.current.appendChild(firstElement);

				slideshow.current.removeEventListener("transitionend", transition);
			};

			// eventlistener when the transition is over
			slideshow.current.addEventListener("transitionend", transition);
		}
	};
	const prev = () => {
		if (slideshow.current.children.length > 0) {
			// get last elements of the slideshow
			const index = slideshow.current.children.length - 1;
			const latElement = slideshow.current.children[index];
			slideshow.current.insertBefore(
				latElement,
				slideshow.current.firstChild
			);

			slideshow.current.style.transition = "none";

			const size = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${size}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `300ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	useEffect(() => {
		intervalSlideShow.current = setInterval(() => {
			next();
		}, 5000);
		// remove interval
		slideshow.current.addEventListener("mouseenter", () => {
			clearInterval(intervalSlideShow.current);
		});
		// set interval back
		slideshow.current.addEventListener("mouseleave", () => {
			intervalSlideShow.current = setInterval(() => {
				next();
			}, 5000);
		});
	}, []);

	return (
		<div className={styles.controls}>
			<span className={styles.prev} onClick={prev}>
				&larr;
			</span>
			<div className={styles.mainContainer}>
				<div className={styles.containerSlideShow} ref={slideshow}>
					<div className={styles.slide} style={{ background: "red" }}>
						My text here 1
					</div>
					<div className={styles.slide} style={{ background: "#ccc" }}>
						My text here 2
					</div>
					<div className={styles.slide} style={{ background: "green" }}>
						My text here 3
					</div>
					<div className={styles.slide} style={{ background: "blue" }}>
						My text here 4
					</div>
				</div>
			</div>
			<span className={styles.next} onClick={next}>
				&rarr;
			</span>
		</div>
	);
};

export default SlideShows;
