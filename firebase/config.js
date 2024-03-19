import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC63n-BSlCM7BzVOW6r-Rfe-kHQDrlBNXk',
  authDomain: 'cuet-crack.firebaseapp.com',
  databaseURL: 'https://cuet-crack-default-rtdb.firebaseio.com',
  projectId: 'cuet-crack',
  storageBucket: 'cuet-crack.appspot.com',
  messagingSenderId: '415080211700',
  appId: '1:415080211700:android:97de26beb079d91cd02aa1',
  measurementId: '7645861921',
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp); // Add this line to initialize Firestore

// Initialize Firebase Auth with AsyncStorage
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { firebaseApp, auth, firestore }; // Export firestore for use in other components
