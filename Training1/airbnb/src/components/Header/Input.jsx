import React from "react";
import PropsTypes from "prop-types";

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input type="search" placeholder={props.text}></input>
    </div>
  );
};

Input.propTypes = {
  label: PropsTypes.string,
  text: PropsTypes.string,
};

export default Input;
