import React from "react";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import { useProjectsOwner } from "../Projects/useProjectsOwner";
import Loader from "../../ui/Loader";

function DashboardLayout() {
  const { isLoading, projects } = useProjectsOwner();
  if (isLoading) return <Loader />;
  return (
    <>
      <DashboardHeader />
      <Stats projects={projects} />
    </>
  );
}

export default DashboardLayout;
