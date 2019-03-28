import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDhxdnmXEsUY9mJhunNMYXmvltghWUlhgo",
    authDomain: "my-react-app-d3931.firebaseapp.com",
    databaseURL: "https://my-react-app-d3931.firebaseio.com",
    projectId: "my-react-app-d3931",
    storageBucket: "my-react-app-d3931.appspot.com",
    messagingSenderId: "473814473020"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
