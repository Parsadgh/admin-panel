import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJapSr1C_G9nBMEjsDen3rDjiCF6liyow",
  authDomain: "admin-panel-4a100.firebaseapp.com",
  projectId: "admin-panel-4a100",
  storageBucket: "admin-panel-4a100.firebasestorage.app",
  messagingSenderId: "921389468417",
  appId: "1:921389468417:web:10afb5766052fcc428a900",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
