import React from 'react';
import app from '../firebase';
import  firebase from 'firebase';

function Home(){
var uid=app.auth().currentUser.uid;

var userStatusDatabaseRef = firebase.database().ref('/status/' + uid);

var isOfflineForDatabase = {
    state: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

var isOnlineForDatabase = {
    state: 'online',
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

firebase.database().ref('.info/connected').on('value', function(snapshot) {
    if (snapshot.val() === false) {
        return;
    };

    userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {
        userStatusDatabaseRef.set(isOnlineForDatabase);
    });
});

// ...
var userStatusFirestoreRef = firebase.firestore().doc('/status/' + uid);

// Firestore uses a different server timestamp value, so we'll 
// create two more constants for Firestore state.
var isOfflineForFirestore = {
    state: 'offline',
    last_changed: firebase.firestore.FieldValue.serverTimestamp(),
};

var isOnlineForFirestore = {
    state: 'online',
    last_changed: firebase.firestore.FieldValue.serverTimestamp(),
};

firebase.database().ref('.info/connected').on('value', function(snapshot) {
    if (snapshot.val() === false) {
        // Instead of simply returning, we'll also set Firestore's state
        // to 'offline'. This ensures that our Firestore cache is aware
        // of the switch to 'offline.'
        userStatusFirestoreRef.set(isOfflineForFirestore);
        return;
    };

    userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {
        userStatusDatabaseRef.set(isOnlineForDatabase);

        // We'll also add Firestore set here for when we come online.
        userStatusFirestoreRef.set(isOnlineForFirestore);
    });
});
userStatusFirestoreRef.onSnapshot(function(doc) {
  var isOnline = doc.data().state === 'online';
  // ... use isOnline
});

firebase.firestore().collection('status')
    .where('state', '==', 'online')
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === 'added') {
                var msg = 'User ' + change.doc.id + ' is online.';
                console.log(msg);
                // ...
            }
            if (change.type === 'removed') {
                var msg = 'User ' + change.doc.id + ' is offline.';
                console.log(msg);
                // ...
            }
        });
    });

console.log(firebase.firestore().collection('status').msg);
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
