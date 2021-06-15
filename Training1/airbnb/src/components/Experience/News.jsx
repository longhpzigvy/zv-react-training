import React from "react";

const News = (props) => {
  return (
    <div className="news" key={props.id}>
      <img src={props.imgUrl} alt="" />
      <h1>{props.title}</h1>
      <p>{props.essay}</p>
    </div>
  );
};

export default News;
