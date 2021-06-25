import React from "react";
import Connection from "./Components/Connection/Connection";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";

export default function App() {
    return (
        <div>
            <Connection />
            <div className="wrapper">
                <header>Event Channel </header>
                <Input />
                <List />
            </div>
        </div>
    );
}
