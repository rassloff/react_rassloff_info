import React, { Component } from "react";

const steuerBerechnen = (steuer, value) => value * steuer / 100;
const gesamtPreis = (steuer, value) => steuerBerechnen(steuer, value) + value;

class Mehrwertsteuer extends Component {
  render() {
    return <span>
    ${gesamtPreis(this.props.steuer, this.props.wert)}&nbsp;
    (incl. ${steuerBerechnen(this.props.steuer, this.props.wert)} MwSt)
  </span>;
  }
}

export default Mehrwertsteuer;
