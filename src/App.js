import { Box, Container } from "@mui/system";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CreateTest from "./pages/CreateTest";
import Finish from "./pages/Finish";
import GiveTest from "./pages/GiveTest"
import ManagerMenu from "./pages/ManagerMenu";
import QuesAnsFeed from "./pages/QuesAnsFeed";

function App() {
  return (
    <Router>
      <Container>
        <Box mt="5">
          <Routes>
            <Route path="/give-test" element={<GiveTest />}/>
            <Route path="/create-test" element={<CreateTest/>}/>
            <Route path="/qaf" element={<QuesAnsFeed/>}/>
            <Route path="/finish" element={<Finish />}/>
            <Route path="/manager" element={<ManagerMenu />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
