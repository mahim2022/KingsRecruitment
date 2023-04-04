import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import React from "react";
import ButtonGroup1 from "./ButtonGroup/ButtonGroup1";
import FooterSection2 from "./FooterSection2/FooterSection2";
import FooterSection3 from "./FooterSection3/FooterSection3";


// backgroundColor: "#1F242A",


function FooterSection() {
	return (
		<Container maxWidth={"xl"} sx={{textAlign:"center", backgroundColor: "#1F242A",}}>
			<Grid container spacing={10}>
				<Grid item sx={4} style={{
						width: "500px",
						// // height: "500px",
						// height: "fit-content",
					}}>
					<h1 style={{color:"white"}}>Explore</h1>
					<ButtonGroup1></ButtonGroup1>
				</Grid>
				<Grid
					item
					sx={4}
					style={{
						width: "500px",
						// // height: "500px",
						// height: "fit-content",
					}}
				>
					<FooterSection2></FooterSection2>
				</Grid>
				<Grid item sx={4} style={{ width: "500px" }}>
					<FooterSection3></FooterSection3>
				</Grid>
			</Grid>
		</Container>
	);
}

export default FooterSection;
