import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

export const ResponsiveCarousel = ({ imagesArray }) => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1201 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 1200, min: 1025 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 769 },
			items: 1,
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
			autoPlaySpeed={3500}
			// transitionDuration={2000}
			removeArrowOnDeviceType={[
				"tablet",
				"mobile",
				"dektop",
				"superLargeDesktop",
			]}
			style={{ height: "fit-content" }}
		>
			{imagesArray.map((cur, index) => (
				// <img
				// 	key={index}
				// 	src={cur}
				// 	alt=""
				// 	style={{ minWidth: "100%", maxWidth: "100%" }}
				// />
				<Box
					key={index}
					style={{
						width: "100vw",
						height: "800px",
						backgroundImage: `url(${cur})`,
						// backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></Box>
			))}
		</Carousel>
	);
};
