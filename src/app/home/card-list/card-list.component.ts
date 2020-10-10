import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  projects: Project[] = [
    {
      id: '1',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL:
        'xxx@xxx.comhttp://unsplash.it/1280/720?random&gravity=center',
      thumbnailURL: 'xxx',
      createdAt: '2020/10/11',
      uid: 'xxx',
    },
    {
      id: '2',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL:
        'xxx@xxx.comhttp://unsplash.it/1280/720?random&gravity=center',
      thumbnailURL: 'xxx',
      createdAt: '2020/10/11',
      uid: 'xxx',
    },
    {
      id: '3',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL:
        'xxx@xxx.comhttp://unsplash.it/1280/720?random&gravity=center',
      thumbnailURL: 'xxx',
      createdAt: '2020/10/11',
      uid: 'xxx',
    },
    {
      id: '4',
      title: 'nashitoge',
      description: '目標を成し遂げるためのお助けツールです。',
      projectURL:
        'xxx@xxx.comhttp://unsplash.it/1280/720?random&gravity=center',
      thumbnailURL: 'xxx',
      createdAt: '2020/10/11',
      uid: 'xxx',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
