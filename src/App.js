import ResponsiveAppBar from "./Components/AppBar/AppBar";
import { Box, Container } from "@mui/material";
import HomePage from "./Container/Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { Home } from "@mui/icons-material";
import WeServeSection from "./Container/Pages/WeServeSection/WeServeSection";
import FinalFooter from "./Components/FooterSection/FinalFooter";
import FooterSection from "./Components/FooterSection/FooterSection";
import RecruitementProcess from "./Container/Pages/RecuitementProcess/RecruitementProcess";
import ContactUs from "./Container/Pages/ContactUs/ContactUs";
function App() {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Routes>
				<Route path="/" element={<HomePage  />} />
				<Route path="weserve" element={<WeServeSection />} />
				<Route path="recruitment" element={<RecruitementProcess />} />
				<Route path="contactus" element={<ContactUs />} />
			</Routes>
			<FooterSection></FooterSection>
			<FinalFooter></FinalFooter>
		</div>
	);
}

export default App;
