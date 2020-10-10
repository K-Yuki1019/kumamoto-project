import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-comment',
  templateUrl: './project-comment.component.html',
  styleUrls: ['./project-comment.component.scss'],
})
export class ProjectCommentComponent implements OnInit {
  user$ = of({
    uid: 'aaa',
    userName: 'つらみが深い人',
    avatarURL: 'https://dummyimage.com/50x50.jpg',
  });
  allComment$ = of([
    {
      uid: 'aaa',
      userName: 'つらみが深い人',
      avatarURL: 'https://dummyimage.com/50x50.jpg',
      comment: 'めちゃめちゃいいと思います',
    },
  ]);
  form = this.fb.group({
    comment: [''],
  });
  processing = true;

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {}

  sendMessage() {
    this.processing = true;
    // 処理が終わる
    this.processing = false;
  }
}
