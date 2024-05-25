import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetails from "./pages/JobDetails";
import PostJobPage from "./pages/PostJobPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import { JobProvider } from "../src/contexts/JobContext";
import { FormProvider } from "../src/contexts/FormContext";
import { AuthProvider } from "../src/contexts/AuthContext";
import MyJobsPage from "./pages/MyJobsPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <FormProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route path="/job/:id" element={<JobDetails />}></Route>

              <Route element={<ProtectedRoute />}>
                <Route path="/post-job" element={<PostJobPage />}></Route>
                <Route path="/my-jobs" element={<MyJobsPage />}></Route>
              </Route>
              <Route path="/login" element={<LogInPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
            </Routes>
          </Router>
        </FormProvider>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;
