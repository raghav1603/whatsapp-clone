import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCtmex3gOHtO7k4TCY13ZLSkFOvtwZiRgc",
  authDomain: "lingulaca-b489e.firebaseapp.com",
  databaseURL: "https://lingulaca-b489e.firebaseio.com",
  projectId: "lingulaca-b489e",
  storageBucket: "lingulaca-b489e.appspot.com",
  messagingSenderId: "647979221495",
  appId: "1:647979221495:web:88cfe10d5380e8a45c6ef2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;