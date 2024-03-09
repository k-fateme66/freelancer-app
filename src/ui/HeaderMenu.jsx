import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/Authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-6">
      <li className="flex">
        <Link to="dashbord">
          <HiOutlineUser className="w-5 h-5 text-primary-900 hover:text-primary-700 transition-all duration-300 ease-linear" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
