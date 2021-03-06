import { Injectable } from '@angular/core';
import { Project, ProjectWithUser } from '../interfaces/project';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { firestore } from 'firebase';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { UserData } from '../interfaces/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(
    private db: AngularFirestore,
    private storege: AngularFireStorage,
    private snackbar: MatSnackBar,
    private router: Router
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
    return this.db.doc<Project>(`projects/${id}`).valueChanges();
  }

  getProjectWithUserByProjectId(id: string): Observable<ProjectWithUser> {
    return this.db
      .doc(`projects/${id}`)
      .valueChanges()
      .pipe(
        switchMap((project: Project) => {
          const user$: Observable<UserData> = this.db
            .doc<UserData>(`users/${project?.uid}`)
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

  async updateProject(
    project: Omit<Project, 'thumbnailURL' | 'createdAt'>,
    thumbnailURL: File
  ): Promise<void> {
    const imageURL: string = await this.uploadImage(project.id, thumbnailURL);
    const projectData: Project = {
      createdAt: firestore.Timestamp.now(),
      ...project,
      thumbnailURL: imageURL,
    };
    return this.db.doc<Project>(`projects/${project.id}`).set(
      {
        ...projectData,
      },
      {
        merge: true,
      }
    );
  }

  deleteProject(project: Project): Promise<void> {
    return this.db
      .doc<Project>(`projects/${project.id}`)
      .delete()
      .then(() => {
        this.router.navigateByUrl('/');
        this.snackbar.open('???????????????????????????????????????');
      });
  }
}
