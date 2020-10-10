import { firestore } from 'firebase';
import { User } from '../interfaces/user';

export interface Project {
  id: string;
  title: string;
  description: string;
  projectURL: string;
  thumbnailURL: string;
  createdAt: string;
  uid: string;
}

export interface ProjectWithUser extends Project {
  user: User;
}
