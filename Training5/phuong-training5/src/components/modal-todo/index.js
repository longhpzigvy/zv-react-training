import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useForm } from "react-hook-form";

const ModalTodo = (props) => {
  const {
    isOpen,
    toggle,
    reqTodo,
    handleChange,
    handleSubmitForm,
  } = props;
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    handleSubmitForm();
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{reqTodo.id ? "Edit" : "Create"}</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="from-group">
              <label htmlFor="title">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                ref={register({
                  required: "Field is required",
                })}
                defaultValue={reqTodo.name}
                onChange={handleChange}
                id="title"
              />
              {errors.name && (
                <span className="text-danger">{errors.name.message}</span>
              )}
            </div>
            <div className="form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="completed"
                checked={reqTodo.completed}
                onChange={handleChange}
                id="completed"
              />
              <label htmlFor="completed">Done</label>
            </div>
            <div className="form-group mt-3 d-flex justify-content-end">
              <Button color="primary mr-2" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalTodo;
