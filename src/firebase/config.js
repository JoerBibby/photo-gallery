import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAo3g7v5yYkjK58nM1HAArX_gZxJ7H_8Ls",
  authDomain: "photo-gallery-29990.firebaseapp.com",
  projectId: "photo-gallery-29990",
  storageBucket: "photo-gallery-29990.appspot.com",
  messagingSenderId: "1009365040234",
  appId: "1:1009365040234:web:9946a90dc233b69a72de13"
  };
  // connect app to firebase services 
  firebase.initializeApp(firebaseConfig);
  // creates objects for storage and database to export to different files as needed 
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp };