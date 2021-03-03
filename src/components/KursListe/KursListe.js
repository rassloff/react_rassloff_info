import React, { Component } from "react";

const KursListen = () =>
  <div>
    <h2>Product List</h2>
    <ul>
      <li><Product /></li>
      <li><Product /></li>
      <li><Product /></li>
    </ul>
  </div>;

const Product = () =>
  <div>
    <h3>Hot Binary Heat Changing Mug</h3>
    <p>Nulla qui voluptate esse id aliquip duis et tempor quis officia veniam. Et cupidatat ut sit eiusmod eiusmod duis tempor et incididunt Lorem exercitation dolore. Quis magna veniam Lorem ad esse incididunt Lorem. Ad ex velit dolore veniam ex minim aliquip qui tempor duis magna. Id laborum eu in do. Est labore do quis ullamco eiusmod Lorem ullamco magna. Laborum enim ipsum et est magna aute enim sint.</p>
  </div>;

class KursListe extends Component {
  
  render() {
    return <KursListen />; //KursListen; // Warum kann ich nicht KursListen so zurück geben ???
  }
}

export default KursListe;
