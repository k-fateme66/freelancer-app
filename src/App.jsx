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

function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvier>
      <QueryClientProvider client={queryClient}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvier>
  );
}

export default App;
