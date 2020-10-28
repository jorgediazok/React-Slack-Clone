import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCESvf0nRvWlqCpgR4FYoDiUP26WLYjM3o',
  authDomain: 'react-slack-clone-86305.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-86305.firebaseio.com',
  projectId: 'react-slack-clone-86305',
  storageBucket: 'react-slack-clone-86305.appspot.com',
  messagingSenderId: '226718263478',
  appId: '1:226718263478:web:40430bd6cddbd2a7105e17',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
