import React, { Component } from "react";

class Mehrwertsteuer extends Component {

  steuerBerechnen = (steuer, value) => value * steuer / 100;

  gesamtPreis = (steuer, value) => this.steuerBerechnen(steuer, value) + value;

  render() {
    return <span>
    ${this.gesamtPreis(this.props.steuer, this.props.wert)}&nbsp;
    (incl. ${this.steuerBerechnen(this.props.steuer, this.props.wert)} MwSt)
  </span>;
  }
}

export default Mehrwertsteuer;
