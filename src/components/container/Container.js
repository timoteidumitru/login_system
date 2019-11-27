import React from "react";
import "./container.scss";
import LeftSide from "../left-side/LeftSide";
import RightSide from "../right-side/RightSide";

export default function Container() {
  return (
    <div className="container-main">
      <LeftSide />
      <RightSide />
    </div>
  );
}
