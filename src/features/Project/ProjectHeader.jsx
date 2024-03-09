import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import useMoveBack from "../../hooks/useMoveBack";
function ProjectHeader({ project }) {
  const onBack = useMoveBack();
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="font-black text-xl text-secondary-600">{project.title}</h2>
      <button onClick={onBack} type="button">
        <HiArrowLeft className="w-5 h-5 text-secondary-500" />
      </button>
    </div>
  );
}

export default ProjectHeader;
