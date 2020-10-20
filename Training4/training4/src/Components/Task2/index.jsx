import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import TableComp from '../TableComp';
import { useState } from 'react';
import {debounce} from 'lodash';

const {Search} = Input;
  
export default function Task2 (props) {
    const [items, setItems] = useState([]);
    const onSearch = value => {
        fetch(`https://restcountries.eu/rest/v2/name/${value}`).then(res => res.json()).then(json => {
            setItems([...json]);
        }).catch(function() {
            setItems([]);
        });
    }
    const handleChange = debounce((value) => {
        onSearch(value);
    }, 1000); 
    return (
        <>
            <Search 
                placeholder="input search text" 
                enterButton="Search" 
                size="large" 
                onSearch={onSearch}
                onChange = {e => handleChange(e.target.value)}
            />
            <TableComp items={items} />
        </>
    );
}



