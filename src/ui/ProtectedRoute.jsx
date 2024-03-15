import React, { useEffect } from "react";
import useAuthorize from "../features/Authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load the authenticated user
  const { isAuthenticated, isAuthorized, isVerified, isLoading, user } =
    useAuthorize();

  // 2. check if is Authorized or not, check is is Authenticagted or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است.");
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

  // 3. while loading => show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  // 4.  if user isAuthenticated and isAuthrozexd => rendere the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
