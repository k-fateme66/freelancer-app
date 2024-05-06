import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import { CustomNavLink } from "../../ui/CustomNavlLink";
import { HiHome } from "react-icons/hi";
import {
  HiMiniRectangleGroup,
  HiMiniRectangleStack,
  HiUsers,
} from "react-icons/hi2";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="users">
          <HiUsers />
          <span>کاربران</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiMiniRectangleStack />
          <span>پروژه‌ها</span>
        </CustomNavLink>
        <CustomNavLink to="proposals">
          <HiMiniRectangleGroup />
          <span>درخواست‌ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
