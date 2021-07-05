import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLogs, setCurrentLog } from "../../api/toDoApi";

const LogItem = ({ log, deleteLogs, setCurrentLog }) => {

  //log là 1 object đc truyền từ Logs.js

  const onDeleteLog = (id) => {
    deleteLogs(id);
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          // truyền vào log là data get về (dữ liệu cũ) để bên components EditLogModal xử lí
          // khi nào đúng id thì hiện dữ liệu của data đó
          onClick={() => setCurrentLog(log.id)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID# {log.id}</span> last updated by{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a
          href="#!"
          onClick={(id) => onDeleteLog(log.id)}
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteLogs: (id) => {
      dispatch(deleteLogs(id));
    },
    setCurrentLog: (id) => {
      dispatch(setCurrentLog(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(LogItem);
