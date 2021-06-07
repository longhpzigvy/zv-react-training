import React, { Component } from "react";

export default class KeyLogger extends Component {
  constructor(props) {
    super(props);
    this.state = { keyLogger: {} };
    this.myInputRef = React.createRef();
  }

  componentDidMount() {
    this.myInputRef.current.addEventListener("keydown", this.onInput, false);
  }

  componentWillUnmount() {
    this.myInputRef.current.removeEventListener("keydown", this.onInput, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
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
      <div
        className={`modal ${
          this.props.isShow ? "display-block" : "display-none"
        }`}
      >
        <div className="modal-content">
          <span className="close" onClick={this.props.handleClose}>
            &times;
          </span>
          <textarea
            type="text"
            id="myInput"
            ref={this.myInputRef}
            rows="10"
            cols="100"
          />
          <h3>{JSON.stringify(this.state.keyLogger)}</h3>
        </div>
      </div>
    );
  }
}
