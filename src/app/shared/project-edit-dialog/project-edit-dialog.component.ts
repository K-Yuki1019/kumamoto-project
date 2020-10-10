import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrls: ['./project-edit-dialog.component.scss'],
})
export class ProjectEditDialogComponent implements OnInit {
  uid: string;
  user$: Observable<UserData> = this.authService.user$;
  isProcessing: boolean;
  request: Request;

  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    body: ['', [Validators.required, Validators.maxLength(400)]],
  });

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get body(): FormControl {
    return this.form.get('body') as FormControl;
  }

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit(uid: string) {}
}
