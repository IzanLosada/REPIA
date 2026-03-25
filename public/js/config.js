firebase.initializeApp({
  apiKey: "AIzaSyDrCUIQ41uibOMscCMzv52zVFoSO2DBxZ8",
  authDomain: "repia-e9dfd.firebaseapp.com",
  projectId: "repia-e9dfd",
  messagingSenderId: "1019919912911",
  appId: "1:1019919912911:web:8ee411e3bb1bccd31f4cba",
  measurementId: "G-ZD5RQZL1TE"
});

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();