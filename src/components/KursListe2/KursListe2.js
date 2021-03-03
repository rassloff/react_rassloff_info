import './KursListe2.css';
import React, { Component } from "react";

import invoiceItems from "./invoice_items.js";
import Mehrwertsteuer from "../Mehrwertsteuer";

const KursListen = () =>
  <div>
    <h2>Invoice</h2>
    <table className="invoice">
      <thead>
        <tr>
          <th>ID</th>
          <th>Count</th>
          <th>Name</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {invoiceItems.map(item => <InvoiceItem {...item} key={item.name} />)}
      </tbody>
    </table>
  </div>;

const InvoiceItem = props =>
  <tr>
    <td>{props.id}</td>
    <td>
      {props.count}  &times;
      {props.count < 4 && <sub className="stock_critical">(only a few copies still available)</sub>}
    </td>
    <td>{props.name}</td>
    <td className="price">${props.price}</td>
    <td>${props.count * props.price}</td>
    <td><Mehrwertsteuer wert={props.count * props.price} steuer={19} /></td>
  </tr>;


class KursListe2 extends Component {
  render() {
    return <KursListen />;
  }
}

export default KursListe2;
