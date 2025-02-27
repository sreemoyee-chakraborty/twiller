import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-JBwhNOE7WAOK0_FM12SAgQjTlFNELCU",
  authDomain: "twillar-78960.firebaseapp.com",
  projectId: "twillar-78960",
  storageBucket: "twillar-78960.firebasestorage.app",
  messagingSenderId: "96733767090",
  appId: "1:96733767090:web:46066cb17b3b03b8ce70ab",
  measurementId: "G-VWRQ7NZ989"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);
