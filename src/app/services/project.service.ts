import { Injectable } from '@angular/core';
import { Project, ProjectWithUser } from '../interfaces/project';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { firestore } from 'firebase';
import { AuthService } from './auth.service';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { UserData } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private storege: AngularFireStorage
  ) {}

  async uploadImage(id: string, file: File) {
    const result = await this.storege.ref(`projects/${id}`).put(file);
    return await result.ref.getDownloadURL();
  }

  async createProject(
    project: Omit<Project, 'id' | 'createdAt' | 'thumbnailURL'>,
    thumbnailURL: File
  ) {
    const id = this.db.createId();
    const imageURL: string = await this.uploadImage(id, thumbnailURL);
    const projectData: Project = {
      id,
      createdAt: firestore.Timestamp.now(),
      ...project,
      thumbnailURL: imageURL,
    };
    return this.db.doc<Project>(`projects/${id}`).set(projectData);
  }

  getProject(id: string): Observable<Project> {
    return this.db.doc<Project>(`products/${id}`).valueChanges();
  }

  getProjectWithUserByProjectId(id: string): Observable<ProjectWithUser> {
    return this.db
      .doc(`projects/${id}`)
      .valueChanges()
      .pipe(
        switchMap((project: Project) => {
          const user$: Observable<UserData> = this.db
            .doc<UserData>(`users/${project.uid}`)
            .valueChanges();
          return combineLatest([user$, of(project)]);
        }),
        map(([user, project]) => {
          return {
            ...project,
            user,
          };
        })
      );
  }

  getProjectsWithUsers(): Observable<ProjectWithUser[]> {
    let projects: Project[];
    return this.db
      .collection<Project>('projects')
      .valueChanges()
      .pipe(
        switchMap((docs: Project[]) => {
          projects = docs;

          if (projects.length) {
            const uniqueUids: string[] = projects
              .filter((project, index, array) => {
                return (
                  array.findIndex((value) => value.uid === project.uid) ===
                  index
                );
              })
              .map((project) => project.uid);

            return combineLatest(
              uniqueUids.map((id) => {
                return this.db.doc<UserData>(`users/${id}`).valueChanges();
              })
            );
          } else {
            return of([]);
          }
        }),
        map((users: UserData[]) => {
          return projects.map((project) => {
            const result: ProjectWithUser = {
              ...project,
              user: users.find((user) => user.uid === project.uid),
            };
            return result;
          });
        })
      );
  }
}
