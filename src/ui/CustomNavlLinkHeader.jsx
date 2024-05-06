import { NavLink } from "react-router-dom";

export function CustomNavlLinkHeader({ children, to }) {
  const navlinkClass = "py-2 hover:text-green-800 transition-all duration-300 ";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass} text-green-900`
          : `${navlinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
