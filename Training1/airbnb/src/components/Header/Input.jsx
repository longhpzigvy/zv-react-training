import React from "react";

const Input = (props) => {
  return (
    <div className="input" >
      <label>{props.label}</label>
      <input type="search" placeholder={props.text} ></input>
    </div>
  );
};

export default Input;
