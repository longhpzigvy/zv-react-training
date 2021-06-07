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

  closeModal = () => {
    this.setState({
      isDisplayModal: false,
    });
  };

  render() {
    return (
      <div className="container">
        <KeyLogger
          isShow={this.state.isDisplayModal}
          handleClose={this.closeModal}
        />
        <button onClick={this.handleClick}>Toggle Modal</button>
      </div>
    );
  }
}

export default App;
