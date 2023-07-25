import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "",
    authDomain: "slack-clone-dbfc0.firebaseapp.com",
    projectId: "slack-clone-dbfc0",
    storageBucket: "slack-clone-dbfc0.appspot.com",
    messagingSenderId: "1036723524181",
    appId: "1:1036723524181:web:9793f8613a500e8da73adc",
    measurementId: "G-0QJ13SNJL6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
