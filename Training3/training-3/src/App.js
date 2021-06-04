import React from "react";
import "./App.css";
import KeyLogger from "./components/KeyLogger";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isDisplayModal: false };
  }

  handleClick = () => {
    this.setState({ isDisplayModal: !this.state.isDisplayModal });
  };

  render() {
    return (
      <div className="App">
        {this.state.isDisplayModal && <KeyLogger />}
        <button onClick={this.handleClick}>Toggle Modal</button>
      </div>
    );
  }
}

export default App;
