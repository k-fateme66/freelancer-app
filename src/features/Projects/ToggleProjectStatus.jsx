import React, { useState } from "react";

import useToggleStatusProject from "./useToggleStatusProject";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const enabled = status === "OPEN" ? true : false;
  const { isUpdataing, toggleStatusProject } = useToggleStatusProject();
  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleStatusProject({ id: project._id, data: { status: newStatus } });
  };
  return (
    <div className="w-[7rem]">
      {isUpdataing ? (
        <Loader height="20" width="50" />
      ) : (
        <Toggle
          enabled={enabled}
          onChange={toggleHandler}
          label={status === "OPEN" ? "باز" : "بسته"}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
