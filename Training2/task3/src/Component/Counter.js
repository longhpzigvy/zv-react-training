import { useState, useEffect } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(props.num);
    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === 0) {
                return;
            }
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [counter]);

    return <p>{counter}</p>;
};

export default Counter;
