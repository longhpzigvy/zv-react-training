
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import JobItem from "./JobItem.jsx";

JobList.propTypes = {
  valueInput: PropTypes.string,
  handleDelete: PropTypes.func,
  editToDo: PropTypes.func,
  valueSearch: PropTypes.string,
  type: PropTypes.string,
  handleComplete: PropTypes.func,
};

function JobList({ valueInput, handleDelete, editToDo, type, valueSearch, handleComplete}) {

  const getJob = useSelector((state) => state.jobList);

  const renderItem = () => {
    let result = null;
    if (type === "SEARCH") {
      result = getJob
        .filter((item) => item.name.includes(valueSearch))
        .map((item) => (
          <JobItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            editToDo={editToDo}
            valueSearch={valueSearch}
            handleComplete={handleComplete}
          />
        ));
    } else {
      result = getJob.map((item) => (
        <JobItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          editToDo={editToDo}
          valueInput={valueInput}
          handleComplete={handleComplete}
        />
      ));
    }
    return result;
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th >Job</th>
          </tr>
        </thead>
        <tbody>{renderItem()}</tbody>
      </table>
    </div>
  );
}

export default JobList;