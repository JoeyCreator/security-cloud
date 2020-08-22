import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Data Cloud - Center Security</h5>
            <p>
              Cloud storage. ... Cloud storage is a model of computer data
              storage in which the digital data is stored in logical pools. The
              physical storage spans multiple servers (sometimes in multiple
              locations), and the physical environment is typically owned and
              managed by a hosting company.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="Data Cloud">covid-19 health</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/contact">Contact</a>
              </li>
              <li className="list-unstyled">
                <a href="/about">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Services</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.covid-19health.netlify.app"> covid-19health </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
