import { firestore } from 'firebase';
import { UserData } from '../interfaces/user';
import { Data } from '@angular/router';

export interface Project {
  id: string;
  title: string;
  description: string;
  projectURL: string;
  thumbnailURL: string;
  createdAt: firestore.Timestamp;
  uid: string;
}

export interface ProjectWithUser extends Project {
  user: UserData;
}
