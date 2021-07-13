import React, {useEffect} from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import {connect} from "react-redux";
import {getLogs} from "../../api/toDoApi";
import Pagination from "react-js-pagination";

const Logs = ({getLogs, logRecuders: {loading, logs, page, totalItems}}) => {
 

    useEffect(() => {
        // gọi function getlogs qua bằng lifecycle của hooks
        getLogs(1);
        //eslint-disable-next-line
    }, []);
   

    // kiểm tra nếu chưa load dc data sẽ hiện loading
    if (loading || logs === null) {
        return <Preloader/>;
    }
    // còn đã có data thì trả về list logs
    return (
        <div>
            <ul className="collection with-header">
                {!loading && logs.length === 0 ? (
                    <p className="center">No logs to show...</p>
                ) : (
                    logs.map((log, index) => <LogItem log={log} key={index}/>) 
                )}
            </ul>
                <Pagination
                    disabledClass={"disabled-navigation"}
                    prevPageText={"<"}
                    nextPageText={">"}
                    hideFirstLastPages
                    activePage={page}
                    // itemsCountPerPage={this.props.data.numItemsPerPage}
                    totalItemsCount={+totalItems}
                    onChange={getLogs}
                />
        </div>
    );
};

const mapStateToprops = state => {
    return {
        logRecuders: state.logRecuders
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getLogs: (page) => {
            dispatch(getLogs(page));
        }
    };
};

export default connect(mapStateToprops, mapDispatchToProps)(Logs);
