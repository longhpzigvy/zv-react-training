import React from "react";
import PropsTypes from "prop-types";

const Place = (props) => {
  return (
    <div className="place" key={props.item.id} style={{ display: "grid" }}>
      <img src={props.item.imgUrl} alt="pic" />
      <p>{props.item.title}</p>
    </div>
  );
};

Place.propTypes = {
  item: PropsTypes.shape({
    id: PropsTypes.number,
    title: PropsTypes.string,
    imgUrl: PropsTypes.string,
  }),
};
export default Place;
