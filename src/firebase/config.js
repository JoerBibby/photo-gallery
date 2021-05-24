import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC5Z4Ge5KmpRSAJ-Wr79ulmjDyybRpur_k",
    authDomain: "photo-gallery-409ae.firebaseapp.com",
    projectId: "photo-gallery-409ae",
    storageBucket: "photo-gallery-409ae.appspot.com",
    messagingSenderId: "1030496941679",
    appId: "1:1030496941679:web:b220832ce6b30d8eb33f9a"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp };