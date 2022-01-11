import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1EI2P3GaIgQSH1oDsCPWDKRUOzVahkPQ',
  authDomain: 'firenotes-5c4da.firebaseapp.com',
  databaseURL: 'https://firenotes-5c4da-default-rtdb.firebaseio.com',
  projectId: 'firenotes-5c4da',
  storageBucket: 'firenotes-5c4da.appspot.com',
  messagingSenderId: '1076735527318',
  appId: '1:1076735527318:web:adf4de1984a6ecc463f5b7',
  measurementId: 'G-6R16B51V4K',
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// eslint-disable-next-line import/prefer-default-export
export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function deleteNote(id) {
  database.ref('notes').child(id).remove();
}

export function addNote(note) {
  database.ref('notes').push(note);
}

export function updateNote(id, note) {
  database.ref('notes').child(id).update(note);
}

export function fetchShorganize(callback) {
  database.ref('shorganize').on('value', (snapshot) => {
    const organized = snapshot.val();
    return callback(organized);
  });
}

export function organizeNotes(state) {
  database.ref('shorganize').set(state);
}
