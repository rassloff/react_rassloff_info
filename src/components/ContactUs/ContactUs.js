import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    const x = 5;
    const y = 7;
    const z = this.add( x, y );
    return <div>ContactUs {z} example this function . . . oder so ähnlich
      <br></br>give us a call 01234567890
    </div>;
  }
  add( a, b ){
    return( a + b );
  }
}

export default ContactUs;
