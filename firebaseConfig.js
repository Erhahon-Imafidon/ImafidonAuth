// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdGEWke6MzogH99KZWhHuBk4gT5ImJcp0',
  authDomain: 'imafidonauth.firebaseapp.com',
  projectId: 'imafidonauth',
  storageBucket: 'imafidonauth.appspot.com',
  messagingSenderId: '704225625286',
  appId: '1:704225625286:web:eb6ae9e65cd222d3d9c3c7',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase with Auth AsyncStorage
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
