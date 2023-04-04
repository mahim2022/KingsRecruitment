import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const buttons1 = [
	<Button key="one">Job Search </Button>,
	<Button key="two">Reviews</Button>,
	<Button key="three">Survey</Button>,
	<Button key="three">Contacts</Button>,

];
const buttons2 = [
	<Button key="one">Consultants</Button>,
	<Button key="two">Insights</Button>,
	<Button key="three">Careers</Button>,
	<Button key="three">About</Button>,

];

function ButtonGroup1() {
	return (
		<Box
		// sx={{
		// 	display: "flex",
		// 	"& > *": {
		// 		m: 1,
		// 	},
		// }}
		>
			{/* <ButtonGroup
				orientation="vertical"
				aria-label="vertical outlined button group"
			>
				{buttons}
			</ButtonGroup>
			<ButtonGroup
				orientation="vertical"
				aria-label="vertical contained button group"
				variant="contained"
			>
				{buttons}
			</ButtonGroup> */}
			<ButtonGroup
				orientation="vertical"
				aria-label="vertical contained button group"
				variant="text"
			>
				{buttons1}
			</ButtonGroup>
			<ButtonGroup
				orientation="vertical"
				aria-label="vertical contained button group"
				variant="text"
			>
				{buttons2}
			</ButtonGroup>
		</Box>
	);
}

export default ButtonGroup1;
