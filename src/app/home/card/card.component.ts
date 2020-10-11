import { Component, Input, OnInit } from '@angular/core';
import { fade } from 'src/app/animation';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [fade],
})
export class CardComponent implements OnInit {
  @Input() project: Project;
  constructor() {}

  ngOnInit(): void {}
}
