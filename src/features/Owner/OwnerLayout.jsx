import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import { HiHome, HiMiniRectangleGroup } from "react-icons/hi2";
import { CustomNavLink } from "../../ui/CustomNavlLink";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span className="hidden md:inline-block">داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiMiniRectangleGroup />
          <span className="hidden md:inline-block">پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
