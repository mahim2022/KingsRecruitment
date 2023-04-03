import React from "react";
import { ResponsiveCarousel } from "../Carousel/Carousel";
import { imagesArray } from "../../Resouces/HomePageSection1/HomePageSection1Images";
import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import HomepageOverlay from "./HomepageOverlay/HomepageOverlay";
import HomePagePaper from "./HomePagePaper/HomePagePaper";
import AboutUsSection from "../AboutUsSection/AboutUsSection";

function HomePageSection1() {
	return (
		<Grid2 container spacing={0}>
			<Grid2 item xs={12}>
				<ResponsiveCarousel imagesArray={imagesArray}></ResponsiveCarousel>
			</Grid2>
			<Grid2 item xs={12} style={{borderStyle:"solid",borderWidth:"1px"}}>
				<HomepageOverlay></HomepageOverlay>
			</Grid2>
			<Grid2 item xs={12}>
				<HomePagePaper></HomePagePaper>
			</Grid2>
			<Grid2 item xs={12}>
				<AboutUsSection></AboutUsSection>
			</Grid2>
		</Grid2>
	);
}

export default HomePageSection1;
