import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyASSFYYQu9tz-w_0KwnbazhKg0zvIlxqAU",
  authDomain: "booksanta-92560.firebaseapp.com",
  projectId: "booksanta-92560",
  storageBucket: "booksanta-92560.appspot.com",
  messagingSenderId: "745185119629",
  appId: "1:745185119629:web:b2b6fc53bcd9b54dff41c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
