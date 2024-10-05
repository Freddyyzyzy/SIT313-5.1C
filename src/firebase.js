import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCYwQ5104wueepfttO2HxsY50nQhT86Z2Y",
  authDomain: "sit313-b4906.firebaseapp.com",
  projectId: "sit313-b4906",
  storageBucket: "sit313-b4906.appspot.com",
  messagingSenderId: "213113672488",
  appId: "1:213113672488:web:de5619b475a89eddc1f61d",
  measurementId: "G-YZZNW31T08"
};

// Init firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Set up auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Firebase service ref
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export { auth, db, storage };

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const deleteCollectionAndDocument = async (collectionKey, field) => {
  const docRef = doc(db, collectionKey, field);

  try {
    await deleteDoc(docRef);
    console.log(`Field ${field} deleted from ${collectionKey} successfully!`);
  } catch (error) {
    console.error("Error deleting document ", error);
  }
};

export const addCollectionAndDocument = async (
  collectionKey,
  objectsToAdd,
  field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field]);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Transaction is successful!");
};

export const fetchCollectionAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const collectionMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const id = docSnapshot.id;
    const items = docSnapshot.data();
    acc[id] = { id, ...items };
    return acc;
  }, {});

  return collectionMap;
};

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error in creating ", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutAuthUser = async (navigate, setCurrentUser) => {
  try {
    await signOut(auth);
    setCurrentUser(null);
    alert("You have successfully signed out!");
    navigate("/");
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out ", error);
  }
};