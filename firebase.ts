
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './firebase-applet-config.json';

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// Use the firestoreDatabaseId from the config if it exists
export const db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId || '(default)');
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// --- CONNECTION TEST ---
import { doc, getDocFromServer } from 'firebase/firestore';

async function testConnection() {
  try {
    // Attempt to fetch a dummy document to verify database connectivity
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Firebase connection failed: Client is offline. Please check your configuration.");
    }
  }
}
testConnection();
