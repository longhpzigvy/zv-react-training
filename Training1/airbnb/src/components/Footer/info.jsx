import React from "react";
import PropsTypes from "prop-types";

const Info = (props) => {
  return (
    <div className="info" key={props.item.id}>
      <h1>{props.item.group}</h1>
      {props.item.names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

Info.propsTypes = {
  item: PropsTypes.shape({
    id: PropsTypes.number,
    group: PropsTypes.string,
    names: PropsTypes.arrayOf(PropsTypes.string),
  }),
};

export default Info;
