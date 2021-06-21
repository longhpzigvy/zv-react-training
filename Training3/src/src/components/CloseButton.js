import React from "react";

function CloseButton({ handleClick }) {
  return (
    <>
      <button type="button" onClick={handleClick}>
        x
      </button>
    </>
  );
}

export default CloseButton;
