import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD8XleMpYIJSIRLtrwXGflywlrEPZY3onE",
    authDomain: "channel-project-r7.firebaseapp.com",
    databaseURL: "https://channel-project-r7.firebaseio.com",
    projectId: "channel-project-r7",
    storageBucket: "channel-project-r7.appspot.com",
    messagingSenderId: "874116482811",
    appId: "1:874116482811:web:46e3251b34080a4342d25e",
    measurementId: "G-QZPYRCV3H2"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth
export const db = firebase.firestore()