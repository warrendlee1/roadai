import { collection, addDoc, doc, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

async function createObstruction({ uid, label, geoData }) {
  const data = {
    createdBy: uid,
    label,
    ...geoData,
    timestamp: Timestamp.now(),
  };

  const docRef = await addDoc(collection(db, 'obstructions'), data);

  return { id: docRef.id, ...data };
}

export { createObstruction };
