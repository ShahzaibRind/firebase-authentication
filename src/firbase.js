import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDqD1SL2fEDNpGbm3FDyZbinNrs5srKB9A",
  authDomain: "fir-authentication47.firebaseapp.com",
  projectId: "fir-authentication47",
  storageBucket: "fir-authentication47.appspot.com",
  messagingSenderId: "1071596832474",
  appId: "1:1071596832474:web:db51ae04bf9d4cb67647e3",
  measurementId: "G-89K8DZGFQ3"
};

const app = initializeApp(firebaseConfig);

// Make variable of Auth for just call method
const auth = getAuth();

// export both
export{app, auth};