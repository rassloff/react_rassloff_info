import React from 'react';
import styles from './ShowUsers.module.css';
/*
async function getUsers() {
  const response = await fetch('https://api.rassloff.info/api/v1/users');
  const users = await response.json();
  console.log(users);

  console.log(typeof(users));

  let freitag = Object.values(users); // initialApiResponse

  console.log(typeof(freitag));

  console.log( 'freitag 0 0 ' + Object.values(freitag[0][0]));

  console.log( Object.values(freitag).map(user => user[0] )); // length

  //console.log(users.map(user => user.length));

  console.log(typeof(freitag) + ' vorm return ... ');

  return false;
}*/

const ShowUsers: React.FC = () => (
  <div className={styles.ShowUsers} data-testid="ShowUsers">
    ShowUsers Component / Show all Users of the JSON 
    <br></br>

  </div>
);

export default ShowUsers;
