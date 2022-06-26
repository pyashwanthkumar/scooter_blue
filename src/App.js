import { Box, Container } from "@mui/system";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CreateExam from "./pages/CreateExam";
import Finish from "./pages/Finish";
import GiveExam from "./pages/GiveExam"
import ManagerMenu from "./pages/ManagerMenu";
import QuesAnsFeed from "./pages/QuesAnsFeed";

function App() {
  return (
    <Router>
      <Container>
        <Box mt="5">
          <Routes>
            <Route path="/exam" element={<GiveExam />}/>
            <Route path="/create_exam" element={<CreateExam/>}/>
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
