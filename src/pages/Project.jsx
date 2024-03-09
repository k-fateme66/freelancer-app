import React from "react";
import useProject from "../features/Project/useProject";
import Loader from "../ui/Loader";
import ProjectHeader from "../features/Project/ProjectHeader";
import ProjectProposal from "../features/Project/ProjectProposal";

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loader />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectProposal proposals={project.proposals} />
    </div>
  );
}

export default Project;
