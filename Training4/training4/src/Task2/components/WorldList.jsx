import React from "react";
import PropTypes from "prop-types";

WorldList.propTypes = {
  data: PropTypes.object,
};

WorldList.defaultProps = {
  data: {},
};

function WorldList({ data }) {


  return (
    <>
      <td>{data.name}</td>
      <td> {data.capital}</td>
      <td>{data.subregion}</td>
    </>
  );
}

export default WorldList;
