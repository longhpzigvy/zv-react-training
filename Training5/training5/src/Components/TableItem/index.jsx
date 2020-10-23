import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../Actions/index';

const TableItem = props => {

    const deleteItem = () => {
        props.deleteItem(props.item.id);
    }
    const updateItem = () => {
        props.getItemEditing(props.item);
        props.openForm();
    }
    
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.item.name}</td>
            <td className='text-center'>
                <span
                    className={props.item.completed ? 'label label-success' : 'label label-danger'}
                    style={{ cursor: 'pointer' }}
                >
                    {props.item.completed ? 'Kích hoạt' : 'Ẩn'}
                </span>
            </td>
            <td className='text-center'>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={updateItem}
                >
                    <span className='fa fa-pencil'></span> &nbsp;
                        Sửa
                    </button>
                    &nbsp; &nbsp;
                    <button
                    type="button"
                    className='btn btn btn-danger'
                    onClick={deleteItem}

                >
                    <span className='fa fa-trash'></span> &nbsp;
                        Xóa
                    </button>
            </td>
        </tr>
    );
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        openForm: function(){
            dispatch(Actions.openForm());
        },
        getItemEditing: function(item){
            dispatch(Actions.getItemEditing(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableItem);