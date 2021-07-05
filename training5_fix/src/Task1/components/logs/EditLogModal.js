import React, { useState, useEffect } from "react";

import { updateLogs } from "../../api/toDoApi";
import { connect } from "react-redux";

const EditLogModal = ({ current, updateLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);

  console.log("urrent", current);

  useEffect(() => {
    // nếu đúng là log khi click vào sửa thì sẽ hiện lên data cũ
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === "") {
    } else {
      const updateLog = {
        id: current.id,
        message,
        attention,
      };
      updateLogs(updateLog);
      // clear filde
      setMessage("");
      setAttention(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
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
                <span>Completed</span>
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
const mapStateToProps = (state) => {
  return {
    current: state.logRecuders.current,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    updateLogs: (log) => {
      dispatch(updateLogs(log));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditLogModal);
