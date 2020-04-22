import React from "react";
import "./Covid.css";

export default function CovidRow({ value }) {
  const { country, cases, deaths } = value;
  const casesWarnningStyle = cases.new === null ? "" : "textColorRed";
  const deathWarnningStyle = deaths.new === null ? "" : "textColorRed";

  return (
    <div className={"contanier"}>
      <h1 className={`textTitleStyle`}>{country}</h1>
      <h2 className={`textNormalStyle`}>{cases.total}</h2>
      <h3 className={`textNormalStyle ${casesWarnningStyle}`}>
        {cases.new === null ? 0 : cases.new}
      </h3>
      <h2 className={`textNormalStyle`}>{deaths.total}</h2>
      <h3 className={`textNormalStyle ${deathWarnningStyle}`}>
        {deaths.new === null ? 0 : deaths.new}
      </h3>
    </div>
  );
}

/*

<div style={{ width: "20%", float: "left" }}>
        <h1> {country} </h1>
      </div>
      <div style={{ width: "50%", float: "left" }}>
        <h2 style={{ width: "25%" }}> {cases.total}</h2>
        <h3 style={{ width: "25%" }}>{cases.new === null ? 0 : cases.new}</h3>
        <h2 style={{ width: "25%" }}> {deaths.total}</h2>
        <h3 style={{ width: "25%" }}>{deaths.new === null ? 0 : deaths.new}</h3>
      </div>

      */
