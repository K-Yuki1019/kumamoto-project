import { firestore } from 'firebase/app';

export interface Comment {
  projectId: string;
  commentId: string;
  comment: string;
  uid: string;
  userName: string;
  avatarURL: string;
  createdAt: firestore.Timestamp;
}
