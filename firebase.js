import { initializeApp } from "firebase/app";
// 1. Corregido: Importamos getFirestore de su paquete correcto
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC34cCKwuy2rXp02uNp587fVgQMIGerDHc",
  authDomain: "barberia-native.firebaseapp.com",
  projectId: "barberia-native",
  storageBucket: "barberia-native.firebasestorage.app",
  messagingSenderId: "647474626796",
  appId: "1:647474626796:web:2fb04f9affdaba9eaba5c9",
  measurementId: "G-V95RPYVMTX"
};

// 2. Corregido: Primero creamos 'app'
const app = initializeApp(firebaseConfig);

// 3. Corregido: Ahora que 'app' ya existe, inicializamos 'db' y la exportamos
export const db = getFirestore(app);