import React from "react";
import { NavLink } from "react-router-dom";

function BoxIconCategory({ icon, title, description, link }) {
  return (
    <NavLink to={link}>
      <div className="basis-1/5 border border-stone-200 rounded-md p-5 hover:border-stone-600 transition-all duration-500">
        <div className="category-banner mb-9">{icon}</div>
        <p>{description}</p>
        <h5 className="text-lg font-semibold">{title}</h5>
      </div>
    </NavLink>
  );
}

export default BoxIconCategory;
