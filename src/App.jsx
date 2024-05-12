import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetails from "./pages/JobDetails";
import PostJobPage from "./pages/PostJobPage";
function App() {
  console.log(import.meta.env.VITE_FIREBASE_PRIVATE_KEY);
  console.log(import.meta.env.VITE_FIREBASE_CONFIG_API_KEY);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/job/:id" element={<JobDetails />}></Route>
        <Route path="/post-job" element={<PostJobPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
