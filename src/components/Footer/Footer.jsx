import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className="logo-text" md="6">
            <img src="/example-transparent.png" width="44" height="44"/>
            &copy; {new Date().getFullYear()} VINBAT.
            <p></p>
          </MDBCol>
          <MDBCol md="6">
            <a href="#">
                <img src="img/footer/instagram.png" width="40" height="40"/>
            </a>    
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;