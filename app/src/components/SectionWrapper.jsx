import React from "react";

export default function SectionWrapper(props) {
  const { children, header, title } = props;
  return (
    <section>
      <div>
        <p>{header}</p>
        <h2>
          {title[0]} <span>{title[1]}</span> {title[2]}
        </h2>
      </div>
      {children}
    </section>
  );
}
