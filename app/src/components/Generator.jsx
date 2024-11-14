import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "./../utils/swoldier";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
  // react way of handling state
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  // traditional way of handling state
  //   let showModal = false;

  function toggleModal() {
    setShowModal(!showModal);
  }

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
          <button onClick={toggleModal}>
            <p>Select muscle groups</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {showModal && <div>Modal</div>}
        </div>
        <Header
          index={"01"}
          title={"Pick your poison"}
          description={"Select the workout you wish to endure."}
        />
        <div>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button key={schemeIndex}>{scheme.replaceAll("_", " ")}</button>
            );
          }, [])}
        </div>
      </SectionWrapper>
    </div>
  );
}
