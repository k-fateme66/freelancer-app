import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader({ width = "75", height = "40" }) {
  return (
    <ThreeDots
      width={width}
      height={height}
      color="rgb(var(--color-primary-900))"
      visible={true}
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
    />
  );
}

export default Loader;
