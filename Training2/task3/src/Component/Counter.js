import { useState, useEffect } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(props.num);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === 0 || stop) {
                return;
            }
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [counter, stop]);

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
