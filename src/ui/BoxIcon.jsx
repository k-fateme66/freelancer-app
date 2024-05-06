import React from "react";

function BoxIcon({ icon, title, description, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={delay}
      className="flex flex-col justify-center md:p-5 p-3"
    >
      {icon}
      <h5 className="text-secondary-0 font-bold md:text-xl mb-2">{title}</h5>
      <p className="text-secondary-0/90 font-thin">{description}</p>
    </div>
  );
}

export default BoxIcon;
