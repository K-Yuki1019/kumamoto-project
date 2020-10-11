import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectService.getProjectsWithUsers();

  constructor(
    private dialog: MatDialog,
    private db: AngularFirestore,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}
}
