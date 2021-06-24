import React from "react";
import PropsTypes from "prop-types";

const News = (props) => {
  return (
    <div className="news" key={props.item.id}>
      <img src={props.item.imgUrl} alt="" />
      <h1>{props.item.title}</h1>
      <p>{props.item.essay}</p>
    </div>
  );
};

News.propTypes = {
  item: PropsTypes.shape({
    id:PropsTypes.number,
    title: PropsTypes.string,
    essay:PropsTypes.string,
    imgUrl:PropsTypes.string,
  }),
};
export default News;
