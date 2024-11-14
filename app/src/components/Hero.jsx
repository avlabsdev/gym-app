import React from "react";

// component imports
import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <span>It&apos;s time to get</span>
      <h1>
        Swole<span>normous</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet <span>consectetur adipisicing</span> elit.
        Eius est laborum nesciunt architecto labore, ullam aliquid a, quo quas,
        doloremque <span>beatae enim</span> ex quaerat reprehenderit minus.
        Nihil omnis quisquam obcaecati?
      </p>
      <Button text={"Accept & Begin"} />
    </div>
  );
}
