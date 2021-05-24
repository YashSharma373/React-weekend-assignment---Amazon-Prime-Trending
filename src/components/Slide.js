import React from "react";

function Slide({content}) {
  return (
    <>
      <h1 data-testid="title">{content.title}</h1>
      <p data-testid="text">{content.text}</p>
    </>
  );
}

export default Slide;
