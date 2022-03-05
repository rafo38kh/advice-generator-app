import React, { Component } from "react";

import { FooterAttr, FooterLink } from "./Footer.styles";

class Footer extends Component {
  render() {
    return (
      <FooterAttr>
        Challenge by
        <FooterLink
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </FooterLink>
        . Coded by
        <FooterLink href="https://github.com/rafo38kh" target="_blank">
          rafo38kh
        </FooterLink>
        .
      </FooterAttr>
    );
  }
}

export default Footer;
