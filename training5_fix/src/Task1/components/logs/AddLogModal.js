import React, { useState } from "react";

import { connect } from "react-redux";
import { addLogs } from "../../api/toDoApi";

const AddLogModal = ({ addLogs }) => {
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      //nguoi dung chua nhap => khong add
    } else {
      console.log(name, completed);
      //newLog la 1 obj luu du lieu tu nguoi dung nhap vao
      const newLog = {
        name,
        completed,
      };
      // đẩy dữ liệu lên server thông qua props đã được dispatch
      addLogs(newLog);
      // clear 
      setName("");
      setCompleted(false);
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          <label htmlFor="message" className="active">
            Log Message
          </label>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={completed}
                  value={completed}
                  onChange={(e) => setCompleted(!completed)}
                />
                <span>Not Completed</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={(e) => onSubmit(e)}
          className="modal-close waves-effect blue waves-light btn "
        >
          Enter
        </a>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addLogs: (log) => {
      dispatch(addLogs(log));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddLogModal);
