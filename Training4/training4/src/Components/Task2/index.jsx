import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import TableComp from '../TableComp';
import { useState, useCallback } from 'react';
import {debounce} from 'lodash';

const {Search} = Input;
  
export default function Task2 (props) {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');
    const onSearch = useCallback(debounce((value) => {
        fetch(`https://restcountries.eu/rest/v2/name/${value}`).then(res => res.json()).then(json => {
            setItems([...json]);
        }).catch(function() {
            setItems([]);
        });
    }, 2000), []);


    const handleChange = (value) => {
        setValue(value);
        onSearch(value);
    };
    
    
    return (
        <>
            <Search
                value={value}
                placeholder="input search text" 
                enterButton="Search" 
                size="large" 
                onSearch={() => { onSearch(value)}}
                onChange = {e => handleChange(e.target.value)}
            />
            <TableComp items={items} />
        </>
    );
}



