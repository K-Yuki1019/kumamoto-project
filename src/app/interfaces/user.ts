import { firestore } from 'firebase';

export interface User {
  name: string;
  photoURL: string;
  email: string;
  createdAt: firestore.Timestamp;
  uid: string;
}
