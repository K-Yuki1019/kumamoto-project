import { firestore } from 'firebase';
import { UserData } from '../interfaces/user';

export interface Project {
  id: string;
  title: string;
  description: string;
  projectURL: string;
  thumbnailURL: string;
  createdAt: firestore.Timestamp;
  uid: string;
  category: string;
}

export interface ProjectWithUser extends Project {
  user: UserData;
}
