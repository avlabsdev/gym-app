import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "./../utils/swoldier";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// component imports
import Button from "./Button";

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
  const [muscle, setMuscle] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  // traditional way of handling state
  //   let showModal = false;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscle.includes(muscleGroup)) {
      setMuscle(muscle.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscle.length > 2) {
      setMuscle(muscle.filter((val) => val !== muscleGroup));
      return;
    }

    if (poison !== "individual") {
      setMuscle([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscle([...muscle, muscleGroup]);

    if (muscle.length === 2) {
      setShowModal(false);
    }
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
            return (
              <button
                className={
                  "bg-red-500 " +
                  (type === poison ? "bg-red-700" : "bg-green-500")
                }
                onClick={() => {
                  setMuscle([]);
                  setPoison(type);
                }}
                key={typeIndex}
              >
                {type.replaceAll("_", " ")}
              </button>
            );
          }, [])}
        </div>
        <Header
          index={"02"}
          title={"Lock on targets"}
          description={"Select the muscles judged for annihilation."}
        />
        <div>
          <button onClick={toggleModal}>
            <p>
              {muscle.length === 0 ? "Select muscle groups" : muscle.join(" ")}
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {showModal && (
            <div>
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button
                    onClick={() => {
                      updateMuscles(muscleGroup);
                    }}
                    className={
                      "bg-red-500 " +
                      (muscle.includes(muscleGroup) ? "bg-green-500" : "")
                    }
                    key={muscleGroupIndex}
                  >
                    {muscleGroup.replaceAll("_", " ")}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <Header
          index={"03"}
          title={"Become Juggernaut"}
          description={"Select your ultimate objective."}
        />
        <div>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button
                onClick={() => {
                  setGoal(scheme);
                }}
                key={schemeIndex}
              >
                {scheme.replaceAll("_", " ")}
              </button>
            );
          }, [])}
        </div>
        <Button text={"Generate Workout"} />
      </SectionWrapper>
    </div>
  );
}
