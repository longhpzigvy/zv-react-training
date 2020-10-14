import React, {useState} from 'react';

let intervalValue = null;

const Task3 = props => {
    //state
    const [disabledStopButton, setDisabledStopButton] = useState(true);
    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);

    //event
    const onStartButton = () => {
        if(value === '') {
            alert('Please input a number');
        } else if (Number.isInteger(Number(value)) === false) {
            alert('Invalid input. Must be a number');
        } else if (parseInt(value, 10) < 0) {
            alert('Number must be greater than 0');
        } else {
            const countValue = parseInt(value, 10);
            setCount(countValue);
            setTimeout(() => {
                intervalValue = setInterval(() => {
                    setCount(count => count - 1);  
                }, 1000);
            }, 0);
        }
    }

    if(count === 0) {
        clearInterval(intervalValue);
    }
    const onStopButton = () => {
        clearInterval(intervalValue);
    }

    return(
        <div>
            <form>
            <input type='text' onChange={event => setValue(event.target.value)}/>
            </form>
            <button onClick={() => {onStartButton()}}>Start</button>
            <button onClick={() => {onStopButton()}}>Stop</button>
            <h1> {count} </h1>
        </div>
    );
}

export default Task3;