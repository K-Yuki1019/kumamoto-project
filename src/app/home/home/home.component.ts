import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/interfaces/project';
import { ProjectEditDialogComponent } from 'src/app/shared/project-edit-dialog/project-edit-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    {
      id: '1',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL: 'https://camp-fire.jp/projects',
      thumbnailURL: 'http://unsplash.it/1280/720?random&gravity=center',
      createdAt: '10/11',
      uid: 'xxx',
      category: '自己啓発',
    },
    {
      id: '2',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL: 'https://camp-fire.jp/projects',
      thumbnailURL: 'http://unsplash.it/1280/720?random&gravity=center',
      createdAt: '10/11',
      uid: 'xxx',
      category: '自己啓発',
    },
    {
      id: '3',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL: 'https://camp-fire.jp/projects',
      thumbnailURL: 'http://unsplash.it/1280/720?random&gravity=center',
      createdAt: '10/11',
      uid: 'xxx',
      category: '自己啓発',
    },
    {
      id: '4',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL: 'https://camp-fire.jp/projects',
      thumbnailURL: 'http://unsplash.it/1280/720?random&gravity=center',
      createdAt: '10/11',
      uid: 'xxx',
      category: '自己啓発',
    },
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
}
