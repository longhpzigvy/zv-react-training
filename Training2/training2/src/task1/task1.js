import React, { useState } from 'react';

const Task1 = _ => {
    //state
    const [name, setName] = useState('Click Me !!!');
    const [count, setCount] = useState(0);

    //method
    const updateCount = () => {
        setName('Clicked');
        setCount(count + 1);
    }

    return (
        <button onClick={() => {updateCount()}}>
            {name}{count > 0 ? `: ${count}` : ''}
        </button>
    );
}

export default Task1;