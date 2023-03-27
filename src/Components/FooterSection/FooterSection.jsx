import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import React from "react";
import ButtonGroup1 from "./ButtonGroup/ButtonGroup1";
import FooterSection2 from "./FooterSection2/FooterSection2";

function FooterSection() {
	return (
		<Container>
			<Grid container>
				<Grid item sx={3}>
					<h1>Explore</h1>

					<ButtonGroup1></ButtonGroup1>
				</Grid>
				<Grid item sx={3}>
					<FooterSection2></FooterSection2>
				</Grid>
				<Grid item sx={3}></Grid>
			</Grid>
		</Container>
	);
}

export default FooterSection;
