import React from "react";
import { NavLink } from "react-router-dom";

function BoxIconCategory({ icon, title, description, link }) {
  return (
    <NavLink to={link}>
      <div className="border border-stone-200 rounded-md md:p-5 p-3 hover:border-stone-600 transition-all duration-500">
        <div className="category-banner mb-9">{icon}</div>
        <p className="text-sm text-secondary-600">{description}</p>
        <h5 className="md:text-lg font-semibold">{title}</h5>
      </div>
    </NavLink>
  );
}

export default BoxIconCategory;
