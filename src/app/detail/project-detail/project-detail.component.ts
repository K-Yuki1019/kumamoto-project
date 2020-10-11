import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Project, ProjectWithUser } from 'src/app/interfaces/project';
import { UserData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  user$: Observable<UserData> = this.authService.user$;

  project$: Observable<ProjectWithUser> = this.route.paramMap.pipe(
    switchMap((param) => {
      const id = param.get('id');
      return this.projectService.getProjectWithUserByProjectId(id);
    })
  );

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  openProjectDialog(project: Project) {}

  openDeleteDialog(project: Project) {}
}
