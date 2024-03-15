import React from "react";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";
import useProposals from "../Proposals/useProposals";
import Loader from "../../ui/Loader";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loader />;
  return (
    <>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </>
  );
}

export default DashboardLayout;
