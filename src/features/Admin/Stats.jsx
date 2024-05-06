import React from "react";
import Stat from "../../ui/Stat";
import {
  HiMiniSquares2X2,
  HiMiniSquare2Stack,
  HiOutlineUsers,
} from "react-icons/hi2";
function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        icon={<HiOutlineUsers className="w-11 h-11" />}
        title="کاربران"
        value={users}
        color="primary"
      />
      <Stat
        icon={<HiMiniSquare2Stack className="w-11 h-11" />}
        title="پروژه‌ها"
        value={projects}
        color="green"
      />
      <Stat
        icon={<HiMiniSquares2X2 className="w-11 h-11" />}
        title="درخواست‌ها"
        value={proposals}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
