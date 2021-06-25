import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import toDoApi from "../api/toDoApi";
import { useSelector } from "react-redux";

ToDoItem.propTypes = {
  item: PropTypes.object,
  handleUpdate: PropTypes.func,
};

function ToDoItem({ item, handleUpdate }) {
  const { id, name, completed } = item;

  const dispatch = useDispatch();
  useSelector((state) => state.filters);

  const handleDelete = async () => {
    await toDoApi.remove(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const handleComplete = async (item) => {
    //item là một object, chỉ thay đổi trạng thái complete
    const newItem = {
      ...item,
      completed: !item["completed"],
    };
    await toDoApi.update(newItem);
    dispatch({
      type: "STATE_COMPLETE",
      payload: item,
    });
  };

  

  return (
    <tr >
      <td style={{minWidth: "150px"}}>{name}</td>
      
      <td>{completed}</td>

      <td>
        <button onClick={handleUpdate(item)}>Update</button>
        <button onClick={handleDelete} style={{margin: '0 10px'}}>Delete</button>
        {completed === true ? (
          <>
            <button
              onClick={() => handleComplete(item)}
              style={{ color: "green" }}
            >
              Complete
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleComplete(item)}
              style={{ color: "red" }}
            >
              Complete
            </button>
          </>
        )}
      </td>
    </tr>
  );
}

export default ToDoItem;
