import React from "react";
import dubaiTaxi from "../ClientCarousel/resources/dubai-taxi.png";
import harinsa from "../ClientCarousel/resources//harinsa.png";
import petroLeand from "../ClientCarousel/resources/petroland.png";
import qvc from "../ClientCarousel/resources/qvc.png";
import stemz from "../ClientCarousel/resources/stemz.png";
import vfs from "../ClientCarousel/resources/vfs.png";
import { ResponsiveCarousel } from "./Carousel/Carousel";
import { Container, Typography } from "@mui/material";

function ClientCarousel() {
	var array = [dubaiTaxi, harinsa, petroLeand, qvc, stemz, vfs];
	return (
		<Container
			style={{
				paddingTop: "2%",
				width: "80%",
				// border: "solid",
				// borderWidth: "1px",
				// display: "flex",
				// justifyContent: "center",
				// alignItems: "center",
				paddingBottom:"5%"
			}}
		>
			<Typography
				variant="h2"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Our Client
			</Typography>

			<ResponsiveCarousel imagesArray={array}></ResponsiveCarousel>
		</Container>
	);
}

export default ClientCarousel;
