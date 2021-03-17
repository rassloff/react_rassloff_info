import './ShowUsers.css';
import React, { Component } from "react";
import axios from "axios";

class ShowUsers extends Component {

  componentDidMount() {
    this.renderUsers();
  }

  renderUsers = async() => {
    try {
      
      // das holt die daten !!!
      /*
      const response = await fetch('https://api.rassloff.info/api/v1/users');
      const daten = await response.json();
      console.log(daten);
      */
      let daten;
      axios
      .get("https://api.rassloff.info/api/v1/users")
      .then(response => {
        //console.log(response);
        daten = response;
        return daten;
      })
      .catch(error => {
        console.log(error)
      });

     /*
      var schleifenDaten;

      fetch('https://api.rassloff.info/api/v1/users').then(function(response) {    // Registriert fulfilled-Callback 1 auf A
        if (response.ok)
          return response.json();
        else
          throw new Error('Kurse konnten nicht geladen werden');
      }).then(function(json) {        
        console.log('function json ok');
        schleifenDaten = 123456789;
        console.log(schleifenDaten);
      }).catch(function(err) {        
        console.log(err);
      });                       
*/
     /*
      let res = await axios.get('https://api.rassloff.info/api/v1/users');
      var daten = await res.data;
    */
      //console.log(daten);

      //console.log(`-----data-länge-----` + daten.data.length);

// das geht so weit 
/*     
      console.log(daten.data[0].attributes.email);

      let schleifenDaten = [];
      for( let i = 0; i < daten.data.length; i++ ){
        schleifenDaten += daten.data[i].attributes.email;
      }
*/
      //return daten;// rückgabe ist ein in render: [object Promise]

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let users = this.renderUsers();

    console.log('in render: ' + users);

    return (
      <div>
        <ul className="list-group list-group-flush">
         <li>Users

         </li>
        </ul>
      </div>
    );
  }
}

export default ShowUsers;
