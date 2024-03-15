import React from "react";
import { toPersianNumers } from "../utils/toPersianNumbers";
const colors = {
  primary: "bg-primary-200 text-primary-900",
  green: "bg-green-200 text-green-900",
  yellow: "bg-yellow-200 text-yellow-900",
};
function Stat({ title, icon, value, color }) {
  return (
    <div className="flex gap-x-4 items-center bg-white rounded-lg p-5 col-span-1">
      <div className={`rounded-full p-4 ${colors[color]}`}>{icon}</div>
      <div>
        <p className="font-bold text-secondary-900 text-lg mb-2 dark:text-secondary-200">
          {title}
        </p>
        <p className="text-secondary-600 text-lg font-bold dark:text-secondary-300">
          {toPersianNumers(value)}
        </p>
      </div>
    </div>
  );
}

export default Stat;
