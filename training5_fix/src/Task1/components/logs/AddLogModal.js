import React, { useState } from "react";

import { connect } from "react-redux";
import { addLogs } from "../../api/toDoApi";

const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "") {
      //khong add
    } else {
      console.log(message, attention);
      const newLog = {
        message,
        attention,
      };
      // đẩy dữ liệu lên server thông qua props đã được dispatch
      addLogs(newLog);
      // clear filde
      setMessage("");
      setAttention(false);
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
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
