import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import image1 from "../../Resouces/HomePageSection1/about1.png";
import image2 from "../../Resouces/HomePageSection1/about2.png";

function AboutUsSection() {
	return (
		<Grid2
			container
			style={{ marginLeft: "10%", marginRight: "", paddingTop: "5%" }}
		>
			<Grid2
				item
				xs={6}
				style={{
					position: "relative",
					bottom: "50%",
					transform: "translate(0%,50%)",
				}}
			>
				<Typography variant="h2">About Us</Typography>
				<Typography>
					Imperial Resources Ltd with License no RL – 1874, a subsidy company of
					SQ Group of Bangladesh license/registered with the Ministry of
					Expatriates and Welfare for labor export activities. The Company is
					managed by the passionate entrepreneurial Mr. Mahbubor Rahman,
					Managing Director of Imperial Resources Ltd and Group Director of SQ
					Group of Bangladesh, corporate office: SuvastuSuraiya Trade Center,
					Level 8th -13th, Plot- 57, Road- 21, Kamal Atartuk Avenue, Banani,
					Dhaka-1213. We are expertise in providing Human Resource Solutions in
					various industries. From healthcare to catering we recruit employees
					by searching and screening the accurate candidate as per our client’s
					requirements. However, our work does not bound here, along with
					searching for the perfect candidate, we ensure that we provide the
					finest training to the candidates and deploy them to work locations.
					Hence, if you are looking for recruitment solutions then Imperial
					Resources Ltd is the ideal organization for you!
				</Typography>
			</Grid2>
			<Grid2 item xs={6}>
				<img src={image1} style={{ height: "400px", width: "700px" }}></img>

				<img src={image2} style={{ height: "400px", width: "700px" }}></img>
			</Grid2>
		</Grid2>
	);
}

export default AboutUsSection;
