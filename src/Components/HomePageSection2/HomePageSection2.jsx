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
var gridInfo=[{img:manpower,head:"Manpower Consultancy",innerText:"At kings, we leverage our unparalleled expertise of"},{img:employee,head:"Employment Assistance",innerText:"We always prefer selection of applicant either by oral"},{img:visaAssistance,head:"Ticket Assistance",innerText:"We always prefer selection of applicant either by oral"},{img:ticket,head:"VISA ASSISTANCE",innerText:"	Following are the types of visas that we provide services to :"}]

function HomePageSection2() {
	return (
		<>
			<Container  maxWidth={'lg'} >
				<Grid2 container spacing={3}>


					{gridInfo.map(cur=>{return<Grid2 item xs={4}>
						<Paper elevation={3} style={{width:"350px",height:"360px" ,textAlign:"center"}}>
	<						img src={cur.img} style={{paddingTop:"2%"}}></img>
							<Typography variant="h4">{cur.head}</Typography>
							<Typography variant="h5">
		{cur.innerText}
	</Typography>
</Paper>
</Grid2>
					 })}



				
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
