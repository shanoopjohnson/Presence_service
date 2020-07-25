import React from 'react';
import app from '../firebase';
import  firebase from 'firebase';

function Home(){
const userid=app.auth().currentUser.uid;

var userStatusDatabaseRef = firebase.database().ref('/status/' + uid);

console.log(ref);
return (
  <div>
<h1>
  Home
</h1>

 <button onClick={() => app.auth().signOut()}>Sign out</button>
</div>
)


}


export default Home;