import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetails from "./pages/JobDetails";
import PostJobPage from "./pages/PostJobPage";
import { JobProvider } from "../src/contexts/JobContext";
import { FormProvider } from "../src/contexts/FormContext";
function App() {
  return (
    <JobProvider>
      <FormProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route path="/job/:id" element={<JobDetails />}></Route>
            <Route path="/post-job" element={<PostJobPage />}></Route>
          </Routes>
        </Router>
      </FormProvider>
    </JobProvider>
  );
}

export default App;
