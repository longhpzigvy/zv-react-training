import React, { useState } from "react";
import Form from "./Component/Form";
import Counter from "./Component/Counter";
import "./App.css";
const App = (props) => {
    const [inputData, setInputData] = useState();

    return (
        <div className="App">
            <Form setInputData={setInputData} />
            {inputData && <Counter num={inputData} />}
        </div>
    );
};

export default App;
