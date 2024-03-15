import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
    const { isLoading, user } = useUser();
    const { pathname } = useLocation();
    const desiredRole = pathname.split("/").at(1);
    const ROLES = {
        admin: "ADMIN",
        freelancer: "FREELANCER",
        owner: "OWNER",
    };
    let isAuthorized = false;
    let isAuthenticated = false;
    let isVerified = false;

    if (user) isAuthenticated = true;
    if (user && Number(user.status) === 2) isVerified = true;
    if (Object.keys(ROLES).includes(desiredRole)) {
        if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
    }

    return { isAuthenticated, isAuthorized, isVerified, user, isLoading }
}