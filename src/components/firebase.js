import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBaVWL7_GxLNBKmQp66BX04-tJObrarVY4',
  authDomain: 'crud-udemy-react-3d9e7.firebaseapp.com',
  databaseURL: 'https://crud-udemy-react-3d9e7.firebaseio.com',
  projectId: 'crud-udemy-react-3d9e7',
  storageBucket: 'crud-udemy-react-3d9e7.appspot.com',
  messagingSenderId: '589059711548',
  appId: '1:589059711548:web:a67482a5b1e0d45a0b5939',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
