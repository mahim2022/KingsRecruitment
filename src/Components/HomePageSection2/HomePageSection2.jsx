import { Container, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import uniqueService from "./resources/ourUniqueServices.png";
import manpower from "./resources/manpower.png";
import employee from "./resources/employee.png";
import visaAssistance from "./resources/visaAssistance.png";
import ticket from "./resources/ticket.png";
import Section2End from "./Section2Modal/Section2end";
import CardSection from "./CardSection/CardSection";
import ClientCarousel from "./ClientCarousel/ClientCarousel";
// import mysvg from "./backgroud.svg";
// import { ReactComponent as image } from "./backgroud.svg??raw&throwIfNamespace=false";

function HomePageSection2() {
	return (
		<>
			<Container style={{ border: "solid", borderWidth: "1px" }}>
				<Grid2 container>
					<Grid2 item xs={3}>
						<Paper elevation={3}>
							<img src={manpower}></img>
							<Typography variant="h4">Manpower Consultancy</Typography>
							<Typography variant="h5">
								At kings, we leverage our unparalleled expertise of
							</Typography>
						</Paper>
					</Grid2>
					<Grid2 item xs={4}>
						<Paper elevation={3}>
							<img src={employee}></img>
							<Typography variant="h4">Employment Assistance</Typography>
							<Typography variant="h5">
								We always prefer selection of applicant either by oral
							</Typography>
						</Paper>
					</Grid2>
					<Grid2 item xs={4}>
						<Paper elevation={3}>
							<img src={visaAssistance}></img>
							<Typography variant="h4">Ticket Assistance</Typography>
							<Typography variant="h5">
								We always prefer selection of applicant either by oral
							</Typography>
						</Paper>
					</Grid2>
					<Grid2 item xs={4}>
						<Paper elevation={3}>
							<img src={ticket}></img>
							<Typography variant="h4">VISA ASSISTANCE</Typography>
							<Typography variant="h5">
								Following are the types of visas that we provide services to :
							</Typography>
						</Paper>
					</Grid2>
					<Grid2 item xs={8}>
						<img src={uniqueService}></img>
					</Grid2>
				</Grid2>
			</Container>
			<Section2End></Section2End>
			<CardSection></CardSection>
			<ClientCarousel></ClientCarousel>
		</>
	);
}

export default HomePageSection2;
