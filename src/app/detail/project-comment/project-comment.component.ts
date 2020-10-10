import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-project-comment',
  templateUrl: './project-comment.component.html',
  styleUrls: ['./project-comment.component.scss'],
})
export class ProjectCommentComponent implements OnInit {
  projectId = 'AAAAAAAAAAAAAAAAAAA';
  allComments$ = this.commentService.getAllComments(this.projectId);
  form = this.fb.group({
    comment: [''],
  });
  processing: boolean;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  sendComment() {
    const comment = this.form.value.comment;
    this.processing = true;
    this.commentService.sendComment(
      this.projectId,
      comment,
      this.authService.user
    );
    this.form.reset();
    this.processing = false;
  }
}
