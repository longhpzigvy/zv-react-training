import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobList from "../components/JobList.jsx";
function Draft(props) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    value: "",
    state: "",
    valueSearch: "",
    type: "COMPLETE",
    idEdit: null,
    complete: true,
  });
  const { value, valueSearch } = state;

  const data = useSelector((state) => state.jobList);

  const handleChange = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    const keyword = document
      .getElementById("txtSearch")
      .value.trim()
      .toLowerCase();
    setState((prevState) => ({
      ...prevState,
      type: "SEARCH",
      state: e.target.value,
      valueSearch: keyword,
    }));
    dispatch({
      type: "SEARCH",
    });
  };

  const handleValueInput = (value, id) => {
    return (e) => {
      if (state.type === "EDIT") {
        dispatch({
          type: "UPDATE",
          payload: {
            value,
            id,
          },
        });
        setState((prevState) => ({
          ...prevState,
          type: "CREATE",
        }));
      } else {
        dispatch({
          type: "CREATE",
          payload: value,
        });
      }
      setState((prevState) => ({
        ...prevState,
        value: "",
      }));
    };
  };

  const editToDo = (id) => {
    return (e) => {
      e.preventDefault();
      setState((prevState) => ({
        ...prevState,
        type: "EDIT",
        value: data.filter((item) => item.id === id)[0].name,
        idEdit: id,
      }));
    };
  };

  const handleDelete = (id) => {
    return () => {
      dispatch({
        type: "DELETE",
        payload: id,
      });
    };
  };

  const handleComplete = (id) => {
    return () => {
      setState((prevState) => ({
        ...prevState,
        type: "COMPLETE",
      }));

      if (state.type === "COMPLETE") {
        dispatch({
          type: "COMPLETE",
          payload: {
            id,
          },
        });
      }
    };
  };

  return (
    <div>
      <div>
        <h1>Hello</h1>
      </div>
      <div>
        <div>
          <input onChange={handleChange} type="text" value={value} />
          <br />
          <div>
            <button onClick={handleValueInput(value, state.idEdit)}>
              Create
            </button>
          </div>
          <br />
          <p>Search</p>
          <input
            onChange={handleChangeSearch}
            id="txtSearch"
            type="text"
            state={state.state}
          />
        </div>
        <JobList
          valueSearch={valueSearch}
          valueInput={value}
          handleDelete={handleDelete}
          editToDo={editToDo}
          type={state.type}
          handleComplete={handleComplete}
        />
      </div>
    </div>
  );
}

export default Draft;
