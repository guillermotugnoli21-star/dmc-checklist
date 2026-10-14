// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithCustomToken,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import firebaseConfig from '../firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Custom authentication for code-based login
export async function loginWithCode(code) {
  try {
    // TODO: Implement backend validation
    // For now, simulate authentication
    console.log('Attempting login with code:', code);
    
    // In production, this would call a Cloud Function
    // that validates the code and returns a custom token
    
    return {
      success: true,
      user: {
        uid: `user_${code}`,
        code: code,
        role: 'OPERATOR', // Default role
        businessUnits: [] // Assigned business units
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: 'Código inválido o expirado'
    };
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Auth state listener
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export { auth, db };