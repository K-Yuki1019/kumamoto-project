import { firestore } from 'firebase';
import { UserData } from '../interfaces/user';

export interface Project {
  id: string;
  title: string;
  description: string;
  projectURL: string;
  thumbnailURL: string;
  createdAt: string;
  uid: string;
  category: string;
}

export interface ProjectWithUser extends Project {
  user: UserData;
}
