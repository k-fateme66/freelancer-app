import React from "react";
import { NavLink } from "react-router-dom";
import { HiMiniRectangleGroup, HiHome } from "react-icons/hi2";

function Sidebar() {
  return (
    <div className=" border border-l border-secondary-200 bg-secondary-0 row-span-2 row-start-1 p-4">
      <ul className="flex flex-col gap-y-3">
        <NavLinkSidebar to="/owner/dashbord">
          <HiHome />
          <span>خانه</span>
        </NavLinkSidebar>
        <NavLinkSidebar to="/owner/projects">
          <HiMiniRectangleGroup />
          <span>پروژه‌ها</span>
        </NavLinkSidebar>
      </ul>
    </div>
  );
}

export default Sidebar;

export function NavLinkSidebar({ children, to }) {
  const navLinkStyle =
    "flex items-center gap-x-1 p-2  hover:bg-primary-100/50 hover:text-primary-900 rounded-md transition-all duration-300 ";
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${navLinkStyle} bg-primary-100/50  text-primary-900`
            : `${navLinkStyle} text-secondary-600`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}
