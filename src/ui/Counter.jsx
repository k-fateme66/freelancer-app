import React from "react";
import CountUp from "react-countup";

function Counter({ title, number }) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <CountUp
          duration={20}
          end={number}
          className="font-bold text-[2rem] text-green-900"
        />
        <span className="font-bold text-[2rem] text-green-900">K</span>
      </div>
      <p className="text-green-950 text-base">{title}</p>
    </div>
  );
}

export default Counter;
