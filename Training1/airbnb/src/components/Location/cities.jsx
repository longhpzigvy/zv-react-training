import React from "react";

const City = (props) => {
  return (
    <div className="cities" key={props.id} style={{width:'300px'}} >
      <img
        src={props.imgUrl}
        alt="icon"
        style={{ height: "60px", borderRadius: "10px",float:'left' }}
      />
      <div>
        <p style={{ fontWeight: "bold" }}>{props.name}</p>
        <p>{props.timeToDrive}</p>
      </div>
    </div>
  );
};

export default City;
