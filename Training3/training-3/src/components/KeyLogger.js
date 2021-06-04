import React, { Component } from "react";

export default class KeyLogger extends Component {
  constructor() {
    super();
    this.state = { keyLogger: {} };
  }

  componentDidMount() {
    document
      .getElementById("myInput")
      .addEventListener("keydown", this.onInput, false);
  }

  componentWillUnmount() {
    document
      .getElementById("myInput")
      .removeEventListener("keydown", this.onInput, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.keyLogger === nextState.keyLogger) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  onInput = (e) => {
    this.setState((prevState) => {
      let keyLogger = Object.assign({}, prevState.keyLogger);
      if (keyLogger.hasOwnProperty(e.key)) keyLogger[e.key] += 1;
      else keyLogger[e.key] = 1;
      return { keyLogger };
    });
  };

  render() {
    return (
      <div>
        <textarea type="text" id="myInput" rows="10" cols="50" />
        <h3>{JSON.stringify(this.state.keyLogger)}</h3>
      </div>
    );
  }
}
