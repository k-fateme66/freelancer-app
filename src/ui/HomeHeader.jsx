import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomNavlLinkHeader } from "./CustomNavlLinkHeader";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { Dialog } from "@headlessui/react";
const navlinks = [
  { link: "/", label: "صفحه اصلی" },
  { link: "projects", label: "پروژه‌ها" },
  { link: "freelancer", label: "فریلنسر" },
];
function HomeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="px-4 lg:px-6 py-3 bg-secondary-0 lg:bg-transparent lg:absolute lg:top-0 lg:left-0 lg:w-full lg:z-10">
      <nav className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow lg:flex hidden gap-x-5">
            <Link to="/" className="ml-6">
              <img src="/img/logo.png" alt="freelancer-logo" />
            </Link>
            {navlinks.map((navLink) => (
              <CustomNavlLinkHeader to={navLink.link} key={navLink.link}>
                {navLink.label}
              </CustomNavlLinkHeader>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            className="flex items-center px-3 py-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiBars3BottomRight className="w-8 h-8 text-secondary-700" />
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 mr-6 gap-x-4">
          <ButtonsAuth
            ClassRegister="btn btn--green hidden lg:inline-block"
            classLogin="btn hidden lg:inline-block"
          />
          <Link to="/" className="lg:hidden">
            <img src="/public/img/logo.png" alt="freelancer-logo" />
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="ml-6">
              <img src="/public/img/logo.png" alt="freelancer-logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <HiOutlineXMark className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                {navlinks.map((navLink) => (
                  <CustomNavlLinkHeader to={navLink.link} key={navLink.link}>
                    {navLink.label}
                  </CustomNavlLinkHeader>
                ))}
              </div>
              <div className="py-6 flex flex-col space-y-2 items-start">
                <ButtonsAuth ClassRegister="btn" classLogin="btn" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default HomeHeader;

export function ButtonsAuth({ classLogin, ClassRegister }) {
  return (
    <>
      <Link to="auth" className={classLogin}>
        ورود
      </Link>
      <Link to="auth" className={ClassRegister}>
        ثبت نام
      </Link>
    </>
  );
}
