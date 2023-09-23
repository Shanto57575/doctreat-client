import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAiqAZ0JvXygXLiA-KHqIz9PQJbEoAyldw",
    authDomain: "doctreat-8f71f.firebaseapp.com",
    projectId: "doctreat-8f71f",
    storageBucket: "doctreat-8f71f.appspot.com",
    messagingSenderId: "867864387898",
    appId: "1:867864387898:web:fbcaf280bcd1b11c5e3003"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);