import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-comment',
  templateUrl: './project-comment.component.html',
  styleUrls: ['./project-comment.component.scss'],
})
export class ProjectCommentComponent implements OnInit {
  user$ = of();
  form = this.fb.group({
    comments: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  sendMessage() {}
}
