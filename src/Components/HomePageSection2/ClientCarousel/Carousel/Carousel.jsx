import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

export const ResponsiveCarousel = ({ imagesArray }) => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1201 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1200, min: 1025 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 769 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={2000}
			// transitionDuration={2000}
			removeArrowOnDeviceType={[
				"tablet",
				"mobile",
				"dektop",
				"superLargeDesktop",
			]}
			// style={{ height: "fit-content" }}
		>
			{imagesArray.map((cur, index) => (
				// <img
				// 	key={index}
				// 	src={cur}
				// 	alt=""
				// 	style={{ minWidth: "100%", maxWidth: "100%" }}
				// />
				<div style={{ paddingRight: "2%", paddingLeft: "2%" }}>
					<img
						src={cur}
						style={{
							width: "300px",
							height: "200px",
						}}
					></img>
				</div>
			))}
		</Carousel>
	);
};
