import React from "react";
import Place from "./place";
import places from "./fakeData";
import "./index.css";

const Hotel = () => {
  return (
    <div className="hotel">
      <h1>Ở bất cứ đâu</h1>
      <div>
        {places.map(({ id, title, imgUrl }) => (
          <Place id={id} title={title} imgUrl={imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
