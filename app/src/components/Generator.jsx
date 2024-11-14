import React from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from "./../utils/swoldier";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div>
      <div>
        <span>{index}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Generator() {
  return (
    <div>
      <SectionWrapper
        header={"generate your workout"}
        title={["It's", "Huge", "o'clock"]}
      >
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"Select the workout you wish to endure."}
        />
        <div>
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return <button key={typeIndex}>{type.replaceAll("_", " ")}</button>;
          }, [])}
        </div>
        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles judged for annihilation."}
        />
        <div>
          {Object.keys(WORKOUTS).map((type, typeIndex) => {
            return <button key={typeIndex}>{type.replaceAll("_", " ")}</button>;
          }, [])}
        </div>
      </SectionWrapper>
    </div>
  );
}
