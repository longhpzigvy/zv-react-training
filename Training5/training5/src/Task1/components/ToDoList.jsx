import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "./ToDoItem.jsx";
import { useSelector } from "react-redux";
ToDoList.propTypes = {
  handleUpdate: PropTypes.func,
  valueSearch: PropTypes.string,
  typeInput: PropTypes.string,
};

function ToDoList({ valueSearch, typeInput, handleUpdate }) {
  const data = useSelector((state) => state.toDoListReducer);

  const renderItem = () => {
    // let result = data.map((item) => (
    //   <ToDoItem key={item.id} item={item}  />
    // ));
    // return result;
    let result = null;

    if (typeInput === "SEARCH") {
      result = data
        .filter((item) => item.name.includes(valueSearch))
        .map((item) => (
          <ToDoItem key={item.id} item={item} handleUpdate={handleUpdate} />
        ));
    } else if (typeInput === "NOT_COMPLETE") {
      result = data
        .filter((item) => item.completed === false)
        .map((item) => (
          <ToDoItem key={item.id} item={item} handleUpdate={handleUpdate} />
        ));
    } else if (typeInput === "COMPLETE") {
      result = data
        .filter((item) => item.completed === true)
        .map((item) => (
          <ToDoItem key={item.id} item={item} handleUpdate={handleUpdate} />
        ));
    } else {
      result = data.map((item) => (
        <ToDoItem key={item.id} item={item} handleUpdate={handleUpdate} />
      ));
    }
    return result;
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>{renderItem()}</tbody>
      </table>
    </div>
  );
}

export default ToDoList;
