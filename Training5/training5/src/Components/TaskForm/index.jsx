import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Actions/index';
import { getDisplayForm } from '../../Selectors/displayForm.selector';
import {getItemEditing} from '../../Selectors/itemEditing.selector';

const TaskForm = props => {
    const [toDo, setToDo] = useState('');
    const [status, setStatus] = useState(true);
    useEffect(() => {
        if(props.itemEditing !== null) {
            setToDo(props.itemEditing.name);
            setStatus(props.itemEditing.completed)
        }
    }, [props.itemEditing]);
    const handleSubmit = e => {
        e.preventDefault();
        if(props.itemEditing === null) {
            if(toDo !== ''){
                const newItem = {
                     name: toDo,
                     completed: status
                }
                props.addItem(newItem);
    
                // Reset state
                setToDo('');
                setStatus(true);
                closeForm();
            } else {
                alert('Invalid value');
            }
        } else {
            if(toDo !== '') {
                const newItem = {
                    ...props.itemEditing,
                    name: toDo,
                    completed: status
                }
                props.updateItem(newItem, newItem.id);
                closeForm();
            } else {
                alert('Invalid value');
            }
        }
    }
    const closeForm = () => {
        setToDo('');
        setStatus(true);
        props.getItemEditing(null);
        props.closeForm();
    }
    if (props.display) {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title flex-container">
                        {props.itemEditing ? 'Sửa công việc' : 'Thêm công việc'}
                        <span
                            className='fa fa-times-circle'
                            style={{ cursor: 'pointer' }}
                            onClick={closeForm}
                        >
                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input
                                type="text"
                                className="form-control"
                                name='toDo'
                                value={toDo}
                                onChange={e => setToDo(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái: </label>
                            <select
                                className='form-control'
                                name='status'
                                value={status}
                                onChange={e => setStatus(e.target.value === 'true' ? true : false)}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <div className='justify-content-center'>
                            <button type="submit" className="btn btn-warning"> 
                                <span className='fa fa-plus'></span>&nbsp;
                                Thêm
                            </button> &nbsp;
                            <button type="button" className="btn btn-danger" onClick={closeForm}>
                                <span className='fa fa-times'></span>&nbsp;
                                Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else {
        return null;
    }
    
}
const mapStateToProps = state => {
    return{
        display: getDisplayForm(state),
        itemEditing: getItemEditing(state)
    }
}

const mapDispatchToProp = {
    closeForm: Actions.closeForm,
    addItem: Actions.addItem,
    getItemEditing: Actions.getItemEditing,
    updateItem: Actions.updateItem
}

export default connect(mapStateToProps, mapDispatchToProp)(TaskForm);