import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { UserData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  user$: Observable<UserData> = this.authService.user$;
  project$: Observable<Project>;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  openProjectDialog() {}

  openDeleteDialog() {}
}
