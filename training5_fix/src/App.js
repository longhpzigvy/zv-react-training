import React, { Fragment, useEffect } from "react";
import SearchBar from "./Task1/components/layout/SearchBar";
import Logs from "./Task1/components/logs/Logs";
import AddLogModal from "./Task1/components/logs/AddLogModal";
import EditLogModal from "./Task1/components/logs/EditLogModal";
import AddBtn from "./Task1/components/layout/AddBtn";
import M from "materialize-css/dist/js/materialize.min.js";



const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <Logs />       
    </Fragment>
  );
};

export default App;
