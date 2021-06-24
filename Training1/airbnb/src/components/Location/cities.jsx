import React from "react";
import PropsTypes from "prop-types";

const City = (props) => {
  return (
    <div className="cities" key={props.item.id}>
      <img src={props.item.imgUrl} alt="icon" />
      <div>
        <h1>{props.item.name}</h1>
        <p>{props.item.timeToDrive}</p>
      </div>
    </div>
  );
};

City.propTypes = {
  item: PropsTypes.shape({
    id: PropsTypes.number,
    name: PropsTypes.string,
    timeToDrive: PropsTypes.string,
    imgUrl:PropsTypes.string
  })
}
export default City;
