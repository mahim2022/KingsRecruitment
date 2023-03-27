import React from "react";
import HomePageSection1 from "../../../Components/HomePageSection1/HomePageSection1";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version
import HomePageSection2 from "../../../Components/HomePageSection2/HomePageSection2";
import FooterSection from "../../../Components/FooterSection/FooterSection";
import { Typography } from "@mui/material";
import FinalFooter from "../../../Components/FooterSection/FinalFooter";

function HomePage() {
	return (
		<Grid2 container spacing={1}>
			<Grid2 item xs={12}>
				<HomePageSection1></HomePageSection1>
			</Grid2>
			<Grid2 item xs={12}>
				<HomePageSection2></HomePageSection2>
			</Grid2>
			{/* <Grid2 item xs={12}>
				<FooterSection></FooterSection>
			</Grid2> */}
			{/* <Grid2 item xs={12}>
				<FinalFooter></FinalFooter>
			</Grid2> */}
		</Grid2>
	);
}

export default HomePage;
