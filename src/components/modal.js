import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class Modal extends Component {
  state = {
    modal13: false
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(13)}>
          Terms & Conditions
        </MDBBtn>
        <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
          <MDBModalHeader toggle={this.toggle(13)}>
            Data Cloud - Center Security
          </MDBModalHeader>
          <MDBModalBody>
            Essentially, a cloud data service is a remote version of a data
            center – located somewhere away from your company's physical
            premises – that lets you access your data through the internet. ...
            A data center traditionally refers to server hardware on your
            premises to store and access data through your local network.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={this.toggle(13)}>
              DECLINE
            </MDBBtn>
            <MDBBtn color="green">ACCEPT</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;
