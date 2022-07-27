import { createTheme, ThemeProvider, Box, Container } from "@mui/material";
import {
  BrowserRouter as Router,
  
  Route
} from "react-router-dom"
import { Routes } from "./routes/routes";
import "./index.css"


const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
      <Router>
        <Container>
          <Box mt="5">
            <Routes/>
          </Box>
        </Container>
      </Router>
    // </ThemeProvider>
  );
}

export default App;
