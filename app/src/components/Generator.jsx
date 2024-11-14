import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Generator() {
  return (
    <div>
      <SectionWrapper
        header={"generate your workout"}
        title={["It's", "Huge", "o'clock"]}
      >
        Section Wrapper
      </SectionWrapper>
    </div>
  );
}
