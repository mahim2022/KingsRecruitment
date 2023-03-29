import React from "react";
import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

///container -grid -icon
//by phone, visit us ,livechat
function ContactUsSection2() {
	return (
		<Paper
			elevation={3}
			style={{
				width: "100%",
				height: "100%",
				textAlign: "center",
				background: "linear-gradient(#acb6e5, #86fde8)",
				paddingTop: "10%",
				paddingBottom: "10%",
			}}
		>
			<Container>
				<Grid2 container spacing={3}>
					<Grid2 item xs={4}>
						{/* icon */}
						<Typography variant="h5">By phone</Typography>
						<Typography>Mobile: +8801796288649</Typography>
						<Typography>Land line : +2478908</Typography>
					</Grid2>
					<Grid2 item xs={4}>
						{/* icon */}
						<Typography variant="h5">Visit our office</Typography>
						<Typography>
							Address:Akram Tower,Naya Paltan,Dhaka,Bangladesh
						</Typography>
						<Typography>Map Link</Typography>
					</Grid2>
					<Grid2 item xs={4}>
						<Typography variant="h5">Reach out to social media</Typography>
						<Typography>Facebook:link</Typography>
						<Typography>Linkedin:link</Typography>
						<Typography>gmail:link</Typography>
					</Grid2>
				</Grid2>
			</Container>
		</Paper>
	);
}

export default ContactUsSection2;
