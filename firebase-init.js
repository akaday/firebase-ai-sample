const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Initialize Firebase Realtime Database
const database = firebase.database();

// Initialize Firebase Remote Config
const remoteConfig = firebase.remoteConfig();

// Initialize Firebase App Check
const appCheck = firebase.appCheck();
appCheck.activate('YOUR_PUBLIC_RECAPTCHA_KEY');
