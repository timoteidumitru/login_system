import React from "react";
import "./left-side.scss";

export default function LeftSide() {
  return (
    <div className="left-side__main">
      <h1>Redefing mobile advertising</h1>
      <p>Please use this form to register.</p>
      <p>
        If you are a member, please <a href="/login">login</a>
      </p>
    </div>
  );
}
