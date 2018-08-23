import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyB3T848N8VufZ4JOsABa_Thq0XkIbkqkh8",
    authDomain: "words-game-challenge.firebaseapp.com",
    databaseURL: "https://words-game-challenge.firebaseio.com",
    projectId: "words-game-challenge",
    storageBucket: "words-game-challenge.appspot.com",
    messagingSenderId: "947999103971"
  };
  
const fire = firebase.initializeApp(config);

export default fire
  