import React, { Component } from "react";

import {
  Card,
  Advice,
  Citate,
  Divider,
  DividerImg,
  Button,
} from "./Box.styles";

import mobDividerPic from "images/pattern-divider-mobile.svg";
import descDividerPic from "images/pattern-divider-desktop.svg";
import dicePic from "images/icon-dice.svg";

class Box extends Component {
  render() {
    return (
      <Card>
        <Advice>advice #117</Advice>
        <Citate>
          &#10077; It is easy to sit up and take notice, what's difficult is
          getting up and taking action. &#10078;
        </Citate>
        <Divider>
          <source srcSet={descDividerPic} media="(min-width: 500px)" />
          <DividerImg src={mobDividerPic} alt="" />
        </Divider>
        <Button>
          <img src={dicePic} alt="dice" />
        </Button>
      </Card>
    );
  }
}

export default Box;
