import ResponsiveAppBar from "./Components/AppBar/AppBar";
import { Box } from "@mui/material";
import HomePage from "./Container/Pages/HomePage/HomePage";
function App() {
	return (
		<Box sx={{ width: "100vw" }}>
			<ResponsiveAppBar></ResponsiveAppBar>
			<HomePage></HomePage>
		</Box>
	);
}

export default App;
