import React, { useState } from "react";
const isEmpty = (num) => num.trim().length === 0;
const isNotNumber = (num) => isNaN(num);
const isNegative = (num) => {
    return parseInt(num) < 0;
};
const Form = (props) => {
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(null);
    const changeHandler = (e) => {
        setUserInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (isEmpty(userInput)) {
            return setError("Please input a number");
        }
        if (isNotNumber(userInput)) {
            return setError("Invalid input. Must be a number");
        }
        if (isNegative(userInput)) {
            return setError("Number must be greater than 0");
        }
        return props.setInputData(userInput);
    };
    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={changeHandler} />
            {error && <p>{error}</p>}
            <button>Submit</button>
        </form>
    );
};
export default Form;
