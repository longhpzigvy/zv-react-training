import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toDoApi from "../api/toDoApi";
import ToDoList from "../components/ToDoList";

function Home(props) {
  const [toDoList, setToDoList] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [typeInput, setTypeInput] = useState("CREATE");

  const filterCheckbox = [
    {
      name: "Completed",
      value: "completed",
    },
    {
      name: "None",
      value: "none",
    },
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(filterCheckbox.length).fill(false)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await toDoApi.get();
        setToDoList(data);
       
      } catch (error) {
        console.log("fail to fetch to do list", error);
      }
    })();
  }, []);



  useEffect(() => {
    dispatch({
      type: "DATA",
      payload: toDoList,
    });
  }, [toDoList])

  const toDoListData = useSelector(state => state.toDoListReducer)

  const handleChange = (e) => {
    // e.preventDefault();
    const keyword = document.getElementById("txtInput").value;
    setValueInput(keyword);
    // console.log('vli', valueInput)
  };


  // const handleComplete = async (item) => {
  //   //item là một object, chỉ thay đổi trạng thái complete
  //   const newItem = {
  //     ...item,
  //     completed: !item["completed"],
  //   };
  //   await toDoApi.update(newItem);
  //   dispatch({
  //     type: "STATE_COMPLETE",
  //     payload: item,
  //   });
  // };

  const handleValueInput = async (e) => {
    const text = valueInput.trim();
    if (e.key === "Enter" && typeInput === "CREATE") {
      const initalTodo = { name: text, completed: false };
      const response = await toDoApi.add(initalTodo);
      const todo_data = response.data; //object
      dispatch({
        type: "CREATE",
        payload: todo_data,
      });
      setValueInput('');
    }
    else if(e.key === "Enter" && typeInput === "UPDATE"){
      // dispatch({
      //   type: "UPDATE",
      //   payload: {
      //     value,
      //     id,
      //   },
      // });
      // setTypeInput("CREATE");
    }
     
  };

 

  const handleChangeSearch = (e) => {
    e.preventDefault();
    const keyword = document.getElementById("txtSearch").value.trim();
    setValueSearch(keyword);
    setTypeInput("SEARCH");
    // dispatch({
    //   type: "SEARCH",
    // });
  };

  const handleOnChangeFilters = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    updatedCheckedState.reduce((typeInput, currentState, index) => {
      if (currentState === true && updatedCheckedState[index + 1] === false) {
        setTypeInput("COMPLETE");
        return typeInput;
      } else if (
        currentState === false &&
        updatedCheckedState[index + 1] === false
      ) {
        setTypeInput("");
        return typeInput;
      } else if (
        currentState === false &&
        updatedCheckedState[index + 1] === true
      ) {
        setTypeInput("NOT_COMPLETE");
        return typeInput;
      } else if (
        currentState === true &&
        updatedCheckedState[index + 1] === true
      ) {
        setTypeInput("");
        return typeInput;
      }
    }, "");
  };

 
  const handleUpdate = (itemToDo) => {
    return (e) => {
      let valueInput = toDoListData.filter(item => item.id ===itemToDo['id'])[0].name;
      setValueInput(valueInput);   
    };
  };

  return (
    <div>
      <div>
        <h1>Hello</h1>
      </div>
      <h2>Add</h2>
      <input type="text" id="txtInput" onChange={handleChange} onKeyDown={handleValueInput} value={valueInput} />
      <h5>Search</h5>
      <input type="text" onChange={handleChangeSearch} id="txtSearch" />

      {filterCheckbox.map(({ name, value }, index) => {
        return (
          <li key={index}>
            <div>
              <div>
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChangeFilters(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
              </div>
            </div>
          </li>
        );
      })}

      <div>
        <ToDoList valueSearch={valueSearch} typeInput={typeInput} handleUpdate={handleUpdate} />
      </div>
    </div>
  );
}

export default Home;
