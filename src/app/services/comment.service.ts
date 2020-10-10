import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private db: AngularFirestore) {}

  sendComment(
    projectId: string,
    comment: string,
    user: UserData
  ): Promise<void> {
    const commentId = this.db.createId();
    const newComment: Comment = {
      projectId,
      commentId,
      uid: user.uid,
      avatarURL: user.avatarURL,
      comment,
      userName: user.userName,
      createdAt: firestore.Timestamp.now(),
    };
    return this.db
      .doc<Comment>(`projects/${projectId}/comments/${commentId}`)
      .set(newComment);
  }

  getLatestComments(projectId: string): Observable<Comment[]> {
    return this.db
      .doc(`projects/${projectId}`)
      .collection<Comment>('comments', (ref) =>
        ref.orderBy('createdAt', 'desc').limit(1)
      )
      .valueChanges();
  }

  getAllComments(projectId: string): Observable<Comment[]> {
    return this.db
      .doc(`projects/${projectId}`)
      .collection<Comment>('comments', (ref) =>
        ref.orderBy('createdAt', 'desc').limit(30)
      )
      .valueChanges();
  }
}
