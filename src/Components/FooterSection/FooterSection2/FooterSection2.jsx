import { Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function FooterSection2() {
	return (
		<div style={{ width: "100%" }}>
			<Link href="#" underline="none">
				<h1>Link</h1>
			</Link>
			<Typography>
				Bashati Horizon, Flat - A12, Room No. - 02 House No. 21, Road No. - 17,
				Banani R/A, Dhaka-1213.
			</Typography>
			<Link href="#" underline="none">
				<h1>Link</h1>
			</Link>
			<Typography>
				Rupayan Trade Center (11th Floor) 114, Kazi Nazrul Islam Avenue Bangla
				Motor, Dhaka-1000.
			</Typography>
			<Typography>Cell:01796288649,91629098193</Typography>
			<Link href="#" underline="none">
				<Typography>naimulmushfiq98@gmail.com</Typography>
			</Link>
			<ButtonGroup
				variant="contained"
				aria-label="outlined primary button group"
			>
				<Button>Facebook</Button>
				<Button>Twitter</Button>
				<Button>LinkedIn</Button>
			</ButtonGroup>
		</div>
	);
}

export default FooterSection2;
