import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../api/toDoApi";
const SearchBar = ({ searchLogs }) => {
  const text = useRef("");
  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <div>
      <nav style={{ marginBottom: "30px" }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Logs..."
                ref={text}
                onChange={onChange}
              />
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    searchLogs: (text) => {
      dispatch(searchLogs(text));
    },
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
