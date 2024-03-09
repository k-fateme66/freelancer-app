import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";
function Logout() {
  const { logout, isPending } = useLogout();
  return isPending ? (
    <Loader />
  ) : (
    <button onClick={logout}>
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-600 hover:text-red-600 transition-all duration-300 ease-linear" />
    </button>
  );
}

export default Logout;
