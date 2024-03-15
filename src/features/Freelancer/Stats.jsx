import React from "react";
import Stat from "../../ui/Stat";
import {
  HiMiniSquares2X2,
  HiMiniSquare2Stack,
  HiMiniWallet,
} from "react-icons/hi2";
import { toPersianNumbersComma } from "../../utils/toPersianNumbers";
function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        icon={<HiMiniSquares2X2 className="w-11 h-11" />}
        title="درخواست‌ها"
        value={numOfProposals}
        color="primary"
      />
      <Stat
        icon={<HiMiniSquare2Stack className="w-11 h-11" />}
        title="درخواست‌ها در حال انجام"
        value={acceptProposals.length}
        color="green"
      />
      <Stat
        icon={<HiMiniWallet className="w-11 h-11" />}
        title="کیف پول"
        value={toPersianNumbersComma(balance)}
        color="yellow"
      />
    </div>
  );
}

export default Stats;
