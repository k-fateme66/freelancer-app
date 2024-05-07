import React from "react";
import Stat from "../../ui/Stat";
import {
  HiMiniSquares2X2,
  HiMiniSquare2Stack,
  HiRectangleStack,
} from "react-icons/hi2";
function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptProjects = projects.map((p) => p.status === 2).length;
  const numOfProposal = projects.reduce(
    (acc, crr) => crr.proposals.length + acc,
    0
  );
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      <Stat
        icon={<HiMiniSquares2X2 className="w-11 h-11" />}
        title="پروژه‌ها"
        value={numOfProjects}
        color="primary"
      />
      <Stat
        icon={<HiMiniSquare2Stack className="w-11 h-11" />}
        title="پروژه‌ها در حال انجام"
        value={numOfAcceptProjects}
        color="green"
      />
      <Stat
        icon={<HiRectangleStack className="w-11 h-11" />}
        title="تعداد درخواست‌ها"
        value={numOfProposal}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
