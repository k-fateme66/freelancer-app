import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import OwnerDashbord from "./pages/OwnerDashbord";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import CompleteProfileForm from "./features/Authentication/CompleteProfileForm";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfileForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<AppLayout />}>
          <Route index element={<Navigate to="dashbord" replace />} />
          <Route path="dashbord" element={<OwnerDashbord />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
