import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCR14Nf2Xs-Dmf6q5gPyErAK5Bd3rgfG0A",
    authDomain: "todo-list-a3f5b.firebaseapp.com",
    projectId: "todo-list-a3f5b",
    storageBucket: "todo-list-a3f5b.appspot.com",
    messagingSenderId: "459932270558",
    appId: "1:459932270558:web:3a51509465e5e82785a74f",
    measurementId: "G-4DBEFVQ7FP",
});

const db = firebaseApp.firestore();

export default db;
