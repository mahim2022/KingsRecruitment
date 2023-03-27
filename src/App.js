import ResponsiveAppBar from "./Components/AppBar/AppBar";
import { Box, Container } from "@mui/material";
import HomePage from "./Container/Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { Home } from "@mui/icons-material";
import WeServeSection from "./Container/Pages/WeServeSection/WeServeSection";
import FinalFooter from "./Components/FooterSection/FinalFooter";
import FooterSection from "./Components/FooterSection/FooterSection";
function App() {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="weserve" element={<WeServeSection />} />
			</Routes>
			<FooterSection></FooterSection>
			<FinalFooter></FinalFooter>
		</div>
	);
}

export default App;
