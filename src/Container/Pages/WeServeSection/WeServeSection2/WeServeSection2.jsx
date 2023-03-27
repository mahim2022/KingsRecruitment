// import React from "react";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";

const data = [
	{
		image: card1,
		heading: "Mordenizing our talent programee",
		text: "Hire the best and the most reliable workforce from asia and take your  company to new heights",
	},
	{
		image: card2,
		heading: "Mordenizing our talent programee",
		text: "Hire the best and the most reliable workforce from asia and take your  company to new heights",
	},
	{
		image: card3,
		heading: "Mordenizing our talent programee",
		text: "Hire the best and the most reliable workforce from asia and take your  company to new heights",
	},
];

function WeServeSection2() {
	return (
		<Container style={{ paddingTop: "3%" }}>
			<Grid2 container spacing={4}>
				{data.map((cur) => {
					return (
						<Grid2 item sx={4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									sx={{ height: 140 }}
									image={cur.image}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{cur.heading}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{cur.text}
									</Typography>
								</CardContent>
								{/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
							</Card>
						</Grid2>
					);
				})}
			</Grid2>
		</Container>
	);
}

export default WeServeSection2;
