import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAK5WVGus8WfTtgV5XWf9O2QEUnjsCKQns",
  authDomain: "my-c1cb2.firebaseapp.com",
  databaseURL: "https://my-c1cb2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-c1cb2",
  storageBucket: "my-c1cb2.appspot.com",
  messagingSenderId: "395255916266",
  appId: "1:395255916266:web:bcbdfe6094d136f2019993",
  measurementId: "G-2BJG9FWT0B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
