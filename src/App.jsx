import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import JobDetails from "./JobDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/job/:id" element={<JobDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
