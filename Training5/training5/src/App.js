import React from 'react';
import './App.css';
import Table from './Components/Table';
import TaskForm from './Components/TaskForm';
import {connect} from 'react-redux';
import * as Actions from './Actions/index';

const App = props =>  {
    return (
        <div className="container">
            {/*Title*/}
            <h1 className='text-center'>To do list</h1>
            <hr />

            <div className='row'>

                {/*Task Form */}
                <div className={props.display ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                    <TaskForm />
                </div>

                {/*Form Control */}
                <div className={props.display ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    {/* Button search */}
                    <button type="button" className="btn btn-primary" onClick={props.openForm}>
                        <span className='fa fa-plus'></span>&nbsp;
                        Add to do list
                    </button>

                    {/* table display list to do*/}
                    <Table />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        display: state.display
    };
};
const mapDispatchToProps = {
    openForm: Actions.openForm
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
