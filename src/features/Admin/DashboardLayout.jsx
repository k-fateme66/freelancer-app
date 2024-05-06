import React from "react";
import DashboardHeader from "./DashboardHeader";
import useProposals from "../Proposals/useProposals";
import Stats from "./Stats";
import Loader from "../../ui/Loader";
import useProjects from "../../hooks/useProjects";
import useUsers from "../../hooks/useUsers";

function DashboardLayout() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoadong2, projects } = useProjects();
  const { isLoading: isLoadong3, users } = useUsers();
  if (isLoading1 || isLoadong2 || isLoadong3) return <Loader />;
  return (
    <>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </>
  );
}

export default DashboardLayout;
