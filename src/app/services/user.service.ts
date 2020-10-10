import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  createUser(user: User): Promise<void> {
    const userData: UserData = {
      uid: user.uid,
      userName: user.displayName,
      avatarURL: user.photoURL,
    };
    return this.db.doc<UserData>(`users/${user.uid}`).set(userData);
  }

  getUserData(uid: string): Observable<UserData> {
    return this.db.doc<UserData>(`users/${uid}`).valueChanges();
  }
}
