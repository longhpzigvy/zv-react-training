import { useState, useEffect } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(props.num);
    const [stop, setStop] = useState(false);
    useEffect(() => {
        setCounter(counter);
        if (counter === 0) {
            setStop(true);
        }
    }, [counter]);
    useEffect(() => {
        let intervalId;
        if (stop === false) {
            intervalId = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [stop]);
    return (
        <>
            <p>{counter}</p>
            <button
                onClick={() => {
                    setStop(!stop);
                }}
            >
                {stop ? "Resume" : "Stop"}
            </button>
        </>
    );
};

export default Counter;
