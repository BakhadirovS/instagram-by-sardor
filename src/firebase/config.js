import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcPxUAHbvbbseVeuN1fEXFI_7qJGhCzJg",
  authDomain: "my-instagram-clone777.firebaseapp.com",
  databaseURL: "https://my-instagram-clone777-default-rtdb.firebaseio.com",
  projectId: "my-instagram-clone777",
  storageBucket: "my-instagram-clone777.appspot.com",
  messagingSenderId: "561490557225",
  appId: "1:561490557225:web:d124d002bcf70994ee5f38",
  measurementId: "G-VBXTDQW7TC"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { firestore, auth, storage, analytics };
