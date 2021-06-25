

import React from "react";
import PropTypes from "prop-types";

JobItem.propTypes = {
  editToDo: PropTypes.func,
  handleDelete: PropTypes.func,
  item: PropTypes.object,
  handleComplete: PropTypes.func,
};

function JobItem({ editToDo, handleDelete, item, handleComplete}) {
  const { name, id } = item;
  return (
    <tr  >
      <td >{name}</td>

      <td>
        <button onClick={editToDo(id)} >
          Edit
        </button>
        <button onClick={handleDelete(id)}>
          Delete
        </button>
        <button onClick={handleComplete(id)}>
          Complete?
        </button>
      </td>
    </tr>
  );
}

export default JobItem;
