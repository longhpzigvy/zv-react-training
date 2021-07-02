import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value: "",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    document.getElementById("idInputEvent").innerHTML = "";
  };

  shouldComponentUpdate() {
    document.getElementById("idInput").addEventListener("click", function (e) {
      document.getElementById("idInputEvent").innerHTML = "user Click!<br>";
    });

    document
      .getElementById("idInput")
      .addEventListener("keypress", function (e) {
        document.getElementById("idInputEvent").innerHTML = "user enter!<br>";
      });

    document.getElementById("idInput").addEventListener("input", function (e) {
      document.getElementById("idInputEvent").innerHTML = "user type!<br>";
    });

    document
      .getElementById("idInput")
      .addEventListener("keydown", function (e) {
        const { key } = e;
        if (key === "Backspace" || key === "Delete") {
          document.getElementById("idInputEvent").innerHTML = "user back!<br>";
        }
      });
    return true;
  }

  handleInput = (e) => {
    const { value } = e.target;
    e.preventDefault();
    this.setState({ value });
    console.log("value", this.state.value);
  };

  componentDidUpdate() {
    console.log("componentdidupdate");
    document.getElementById("input-id").innerHTML = `${this.state.value}`;
  }

  render() {
    return (
      <div>
        <button id="btn-id" type="button" onClick={this.showModal}>
          Open Modal
        </button>
        <p>Text received from Modal</p>
        <p id="input-id" style={{ margin: "2rem" }}></p>

        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          handleInput={this.handleInput}
        >
          <p>This is Modal</p>
          <p id="idBtnEvent"> </p>

          <p id="idInputEvent"></p>
        </Modal>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
