import React from "react";
import { NavLink } from "react-router-dom";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

function HomeFooter() {
  return (
    <footer className="bg-[#fcf9f0] py-4" data-aos="fade-up">
      <div className="container mx-auto max-w-screen-xl ">
        <div className="flex lg:flex-row flex-col items-center justify-between border-b pb-4">
          <nav className="flex items-center gap-x-2 ">
            <NavLink to="/" className="btn btn--link font-normal text-md">
              قوانین و مقررات
            </NavLink>
            <NavLink to="/" className="btn btn--link font-normal text-md">
              درباره ما
            </NavLink>
            <NavLink to="/" className="btn btn--link font-normal text-md">
              تماس با ما
            </NavLink>
          </nav>
          <nav className="flex items-center justify-end gap-x-1">
            <NavLink to="/" className="btn btn--link font-normal">
              <BsLinkedin className="w-4 h-4" />
            </NavLink>
            <NavLink to="/" className="btn btn--link font-normal">
              <BsFacebook className="w-4 h-4" />
            </NavLink>
            <NavLink to="/" className="btn btn--link font-normal">
              <BsInstagram className="w-4 h-4" />
            </NavLink>
          </nav>
        </div>
        <p className="text-center text-sm pt-4 text-secondary-900/80">
          © تمام حقوق برای فریلنسر محفوظ است
        </p>
      </div>
    </footer>
  );
}

export default HomeFooter;
