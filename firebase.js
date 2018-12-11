import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var config = {
    apiKey: "AIzaSyCoFxdjEN-0Ezx1kXomTWHM-4slxzaD06Y",
    authDomain: "react-slack-clone-d17d5.firebaseapp.com",
    databaseURL: "https://react-slack-clone-d17d5.firebaseio.com",
    projectId: "react-slack-clone-d17d5",
    storageBucket: "react-slack-clone-d17d5.appspot.com",
    messagingSenderId: "266390633660"
  };
  firebase.initializeApp(config);

  export default firebase;
