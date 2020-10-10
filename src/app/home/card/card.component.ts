import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animation';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [fade],
})
export class CardComponent implements OnInit {
  project: Project = {
    id: '1',
    title: 'nashitoge',
    description: '目標を成し遂げるためのお助けツールです。',
    projectURL: 'https://camp-fire.jp/projects/view/315516?list=popular',
    thumbnailURL: 'http://unsplash.it/1280/720?random&gravity=center',
    createdAt: '10/11',
    uid: 'xxx',
  };

  constructor() {}

  ngOnInit(): void {}
}
