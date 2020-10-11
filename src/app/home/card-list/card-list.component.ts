import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectService.getProjectsWithUsers();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}
}
