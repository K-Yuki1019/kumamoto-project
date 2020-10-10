import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  // createUser(userId: string): Promise<void> {
  //   const userData: UserData = {
  //     userId,
  //     userName,
  //     avatarURL,
  //   };
  //   return this.db.doc<UserData>(`users/${userId}`).set(userData);
  // }

  getUserData(userId: string): Observable<UserData> {
    return this.db.doc<UserData>(`users/${userId}`).valueChanges();
  }
}
