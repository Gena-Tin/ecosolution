import React from "react";
import css from "./SectionTitle.module.css";

function SectionTitle({ title, alignCenter }) {
  const titleStyle = {
    textAlign: alignCenter ? "center" : "left",
  };

  return (
    <h2 style={titleStyle} className={css.title}>
      {title}
    </h2>
  );
}

export default SectionTitle;
