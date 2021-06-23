
import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {

  componentWillReceiveProps(nextProps) {
    console.log("Component con da nhan duoc props tu component cha");

  }
  render() {
    return (
      <div
        className={
          this.props.show ? "modal display-block" : "modal display-none"
        }
      >
        <section className="modal-main">
          {this.props.children}
          <br />
          <input id="idInput" onChange={this.props.handleInput}  />
          <button type="button" onClick={this.props.handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  }
}

export default Modal;
