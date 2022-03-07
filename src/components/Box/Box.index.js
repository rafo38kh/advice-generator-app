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

import quotesService from "services/quotesService";

console.log(quotesService);

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adviceId: 0,
      content: "",
      author: "",
    };

    this.handlClick = this.handlClick.bind(this);
  }

  componentDidMount() {
    quotesService().then((res) => {
      this.setState({ ...res });
    });
  }

  handlClick() {
    quotesService().then((res) => {
      this.setState({ ...res });
    });
  }

  render() {
    return (
      <Card>
        {/* <Advice>advice #{this.state.adviceId}</Advice> */}
        <Advice>advice #117</Advice>
        {/* <Citate>&#10077;{this.state.content}&#10078;</Citate> */}
        <Citate>
          &#10077;"It is easy to sit up and take notice, what's difficult is
          getting up and taking action.&#10078;
        </Citate>
        <Divider>
          <source srcSet={descDividerPic} media="(min-width: 500px)" />
          <DividerImg src={mobDividerPic} alt="" />
        </Divider>
        {/* <Advice>{this.state.author}</Advice> */}
        {/* <Advice>AUTHOR</Advice> */}
        <Button onClick={this.handlClick}>
          <img src={dicePic} alt="dice" />
        </Button>
      </Card>
    );
  }
}

export default Box;
