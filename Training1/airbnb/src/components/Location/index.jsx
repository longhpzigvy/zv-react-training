import React from "react";
import cities from "./fakeData";
import City from "./cities";
import "./index.css";

const Location = () => {
  return (
    <div className="location">
      <h1>Khám phá những điểm đến gần đây</h1>
      <div>
        {cities.map((city) => (
          <City item={city} />
        ))}
      </div>
    </div>
  );
};

export default Location;
