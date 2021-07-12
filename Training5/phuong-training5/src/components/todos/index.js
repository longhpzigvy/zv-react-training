import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todos.scss";
import { bindActionCreators } from "redux";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "../../redux/todo/todo.action";
import { Table } from "reactstrap";
import ModalTodo from "../modal-todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const { listTodo } = useSelector((state) => state.todos);
  const [todos, setTodos] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [reqTodo, setReqTodo] = useState({id: "", name: "", completed: false})

  React.useEffect(() => {
    let dispatchGetListTodo = bindActionCreators(getAllTodo, dispatch);
    dispatchGetListTodo();
  }, [dispatch]);

  React.useEffect(() => {
    setTodos(listTodo)
  }, [listTodo])

  const renderListTodo = todos.map((todo) => (
    <tr key={todo.id}>
      <td>{todo.name}</td>
      <td>{todo.completed ? "Done" : "Inprogress"}</td>
      <td>
        <button className="btn btn-success mr-2" onClick={() => handleEdit(todo)}>Edit</button>
        <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
      </td>
    </tr>
  ));

  const toggle = () => setOpen(!isOpen)

  const handleChange = (event) => {
    const {name, value, checked } = event.target
    setReqTodo({...reqTodo, [name]: name === "name" ? value : checked})
  }

  const handleAddTodo = () => {
    toggle()
    resetForm()
  }

  const handleEdit = (todo) => {
    toggle()
    setReqTodo({...reqTodo, ...todo})
  }

  const resetForm = () => {
    setReqTodo({id: "", name: "", completed: false})
  }

  const handleSubmit = () => {
    if (reqTodo.id) {
      let dispatchUpdateTodo = bindActionCreators(updateTodo, dispatch)
      dispatchUpdateTodo(reqTodo)
    } else {
      let dispatchAddTodo = bindActionCreators(addTodo, dispatch)
      dispatchAddTodo(reqTodo)
    }
    resetForm()
    toggle()
  }

  const handleDelete = (id) => {
    let dispatchDeleteTodo = bindActionCreators(deleteTodo, dispatch)
    dispatchDeleteTodo(id)
  }

  return (
    <div className="todos container">
      <div className="title text-center mb-4">List Todo</div>
      <button className="btn btn-warning mb-3" onClick={handleAddTodo}>Create</button>
      <div className="row">
        <div className="col">
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {renderListTodo}
            </tbody>
          </Table>
        </div>
      </div>
      <ModalTodo 
        isOpen={isOpen} 
        toggle={toggle} 
        reqTodo={reqTodo}
        handleChange={handleChange}
        handleSubmitForm={handleSubmit}
        />
    </div>
  );
};

export default TodoList;
