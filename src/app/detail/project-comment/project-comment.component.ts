import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-project-comment',
  templateUrl: './project-comment.component.html',
  styleUrls: ['./project-comment.component.scss'],
})
export class ProjectCommentComponent implements OnInit {
  @Input() projectId: string;
  allComments$: Observable<Comment[]>;
  form = this.fb.group({
    comment: [''],
  });
  processing: boolean;

  constructor(
    private fb: FormBuilder,
    public commentService: CommentService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.allComments$ = this.commentService.getAllComments(this.projectId);
  }

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
