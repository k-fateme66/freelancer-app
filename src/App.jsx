import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import OwnerDashbord from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import CompleteProfileForm from "./features/Authentication/CompleteProfileForm";
import { DarkModeProvier } from "./context/DarkModeContext";
import OwnerLayout from "./features/Owner/OwnerLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import FreelancerLayout from "./features/Freelancer/FreelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvier>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfileForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="/freelancer" element={<FreelancerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvier>
  );
}

export default App;
