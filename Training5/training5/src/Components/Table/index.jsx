import React, { useEffect } from 'react';
import TableItem from '../TableItem';
import {connect} from 'react-redux';
import * as Actions from '../../Actions/index';
import { getToDoList } from '../../Selectors/todo.selector';


const Table = props => {
    const deleteItem = id => {
        props.deleteItem(id);
    }
    const tableItem = props.data.loading ? (
        <tr><td><h2>Loading....</h2></td></tr>
    ) : props.data.error ? (
        <tr><td><h2>{props.data.error}</h2></td></tr>
    ) : (
        props.data.items.map((item, index) => {
            return <TableItem key={index} item={item} index={index} deleteItem={deleteItem} /> 
        })
    );
    useEffect(() => {

        callApi('todos', 'GET', null).then(res => {
            const items = res.data;
            dispatch(fetchItemsSuccess(items));
        }).catch(err => {
            const errMessage = err.message;
            dispatch(fetchItemsFailure(errMessage));
        });
    }, []);
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className='text-center'>STT</th>
                    <th className='text-center'>Tên</th>
                    <th className='text-center'>Trạng thái</th>
                    <th className='text-center'>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {tableItem}
            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    return {
        data: getToDoList(state)
    }
}

const mapDispatchToProps = {
    fetchItems: Actions.fetchItems,
    deleteItem: Actions.deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);