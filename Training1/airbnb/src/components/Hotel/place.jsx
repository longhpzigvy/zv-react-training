import React from "react";

const Place = (props) => {
  return (
    <div className="place" key={props.id} style={{ display: "grid" }}>
      <img src={props.imgUrl} alt="pic" />
      <p>{props.title}</p>
    </div>
  );
};

export default Place;
