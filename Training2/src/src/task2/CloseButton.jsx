import React from "react";

const CloseButton = ({ close }) => {
  return (
    <button className="close-button" type="button" onClick={close}>
      Close
    </button>
  );
};

export default CloseButton;
