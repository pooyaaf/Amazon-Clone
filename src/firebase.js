import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6XQB49xf51UEb7Xuru-E5h6dKFPRhBGM",
  authDomain: "challenge-4432d.firebaseapp.com",
  databaseURL: "https://challenge-4432d.firebaseio.com",
  projectId: "challenge-4432d",
  storageBucket: "challenge-4432d.appspot.com",
  messagingSenderId: "780790884719",
  appId: "1:780790884719:web:f23635f0c22aad986ae09a",
  measurementId: "G-BD1RLYY4ZR",
  hosting: {
    public: "public",
    rewrites: [
      {
        source: "**",
        destination: "./index.html",
      },
    ],
  },
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
