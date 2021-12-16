import React from "react";
import "./SectionHeading.scss";
export default function SectionHeading({ Icon, text = "" }) {
  return (
    <div className="SectionHeading">
      <Icon />
      <h3>{text}</h3>
    </div>
  );
}
