import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCztwuZSGpPAwNJ5LUFsQH9Jhe8i1HY4gQ',
    authDomain: 'wmovies-c2bd7.firebaseapp.com',
    projectId: 'wmovies-c2bd7',
    storageBucket: 'wmovies-c2bd7.appspot.com',
    messagingSenderId: '120133650684',
    appId: '1:120133650684:web:5b098fe537257c9cb2af79',
    measurementId: 'G-ZES54RRCY5',
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
    useFetchStreams: false,
});
export const auth = getAuth(app);
